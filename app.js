// Modules
const express = require("express");
const path = require('path');
const dTree = require("d3-dtree");
const d3 = require("d3");

// Data
var familyTreeRelations = require("./data/familyRelations.json")

const app = express();

const PORT = process.env.PORT || 5000;


var scssPath = path.join(__dirname, 'public/stylesheets/timeline.scss')
console.log(scssPath);

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => { res.render("pages/home") });

app.get("/projects", (req, res) => { res.render("pages/projects") });

app.get("/profile", (req, res) => { res.render("pages/profile") });

app.get("/impressum", (req, res) => {res.render("pages/impressum") });

app.get("/familytree", (req, res) => {
    res.render("pages/familytree")    
});


app.get("/familytree/relations", (req, res) => {
    res.json(familyTreeRelations);
});

app.listen(PORT, () => { console.log(`Server started on Port ${PORT}`)});