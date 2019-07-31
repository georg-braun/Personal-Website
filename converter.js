const fs = require('fs');
const path = require('path');
const showdown = require('showdown');


var converter = new showdown.Converter();
converter.setFlavor('github');


async function readFiles(dirname, articleFoundHandler) {
    let hArticleMetadataFilePath = path.join(dirname, "ArticleMetadata.json");
    var hArticleMetaDataText = fs.readFileSync(hArticleMetadataFilePath);
    var hArticleMetaData = JSON.parse(hArticleMetaDataText);

    for (i=0; i < hArticleMetaData.metadata.length; i++){
        var hArticle = hArticleMetaData.metadata[i];
        var hArticlePath = path.join(dirname, hArticle.file);
        fs.readFile(hArticlePath, 'utf-8', (err, hArticleContent) => {
            if (err){
                console.log(err);
                return;
            }
            var hArticleHtmlContent = ConvertMarkdownToHTML(hArticleContent);
            hArticle.content = hArticleHtmlContent;
            articleFoundHandler(hArticle);
        });
    }

/*
    fs.readdir(dirname, (err, filenames) => {
        if (err) {
            console.log(err);
            return;
        }

        filenames.forEach(filename => {
            
            fs.readFile(hRelativeFilePath, 'utf-8', (err, content) => {
                if (err){
                    console.log(err);
                    return;
                }
                var hArticle = ConvertMarkdownToArticle(content);
                articleFoundHandler(hArticle);
            });
        });

    });
    */
}



function ConvertMarkdownToHTML(_markdown){
    return converter.makeHtml(_markdown);
}

async function getArticles(dir, articleFoundHandler){
    readFiles(dir, articleFoundHandler);    
}

module.exports = { readFiles , getArticles };