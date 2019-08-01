const fs = require("fs");
const path = require("path");
const showdown = require("showdown");

var converter = new showdown.Converter();
converter.setFlavor("github");

async function importArticles(_dirname, _articleFoundHandler) {
  let hArticleInfos = getArticleInfos(
    path.join(_dirname, "ArticleMetadata.json")
  );

  for (i = 0; i < hArticleInfos.metadata.length; i++) {
    let hArticle = hArticleInfos.metadata[i];
    let hArticleHTML = getArticleAsHtml(_dirname, hArticle);
    hArticle.content = hArticleHTML;

    _articleFoundHandler(hArticle);
  }
}

function getArticleInfos(_metadataPath) {
  let hArticleMetaDataText = fs.readFileSync(_metadataPath);
  return JSON.parse(hArticleMetaDataText);
}

function getArticleAsHtml(_dirname, _articleMetadata) {
  let hArticlePath = path.join(_dirname, _articleMetadata.file);

  let hArticleMarkdown = fs.readFileSync(hArticlePath, "utf-8");
  return ConvertMarkdownToHTML(hArticleMarkdown);
}

function ConvertMarkdownToHTML(_markdown) {
  return converter.makeHtml(_markdown);
}

module.exports = { importArticles };
