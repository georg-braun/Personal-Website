const fs = require('fs');
const path = require('path');
const showdown = require('showdown');

var converter = new showdown.Converter();



async function readFiles(dirname, articleFoundHandler) {
    fs.readdir(dirname, (err, filenames) => {
        if (err) {
            console.log(err);
            return;
        }

        filenames.forEach(filename => {
            let hRelativeFilePath = path.join(dirname, filename)
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
}



function ConvertMarkdownToArticle(_markdown){
    // Metadaten extrahieren

    // Inhalt extrahieren

    // Objekt erstellen
    hArticleAsHtml = converter.makeHtml(_markdown);

    return {
        route: '/myfirstarticle',
        content: hArticleAsHtml
    };
}

async function getArticles(dir, articleFoundHandler){
    readFiles(dir, articleFoundHandler);    
}

module.exports = { readFiles , getArticles };