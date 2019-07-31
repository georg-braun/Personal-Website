// Modules
const express = require("express");
const path = require('path');
const converter = require('./converter');


var familyTreeRelations = require("./data/familyRelations.json")




const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, 'public')));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => { res.render("pages/home") });

app.get("/projects", (req, res) => { 
    res.render("pages/projects", {Articles : Articles}) });

app.get("/profile", (req, res) => { res.render("pages/profile") });

app.get("/impressum", (req, res) => {res.render("pages/impressum") });

app.get("/projects/familytree", (req, res) => {
    res.render("pages/projects/familytree")    
});

app.get("/projects/familytree-description", (req, res) => {
     res.render("pages/projects/project-familytree-description")
     });

app.get("/projects/website-description", (req, res) => {
    res.render("pages/projects/project-website-description")
    });     

app.get("/familytree/relations", (req, res) => {
    res.json(familyTreeRelations);
});


var Articles = [];
converter.getArticles('./data/articles', article => {
    app.get(article.route, (req, res) => {  
        res.render('pages/article', { article : article}); 
    });  
    Articles.push(article);

});





app.listen(PORT, () => { console.log(`Server started on Port ${PORT}`)});