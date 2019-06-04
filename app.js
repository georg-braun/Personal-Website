const express = require("express");
const path = require('path');
const noSniff = require('dont-sniff-mimetype')
const dTree = require("d3-dtree");
const d3 = require("d3");

const app = express();

const PORT = process.env.PORT || 5000;


var scssPath = path.join(__dirname, 'public/stylesheets/timeline.scss')
console.log(scssPath);

app.use(noSniff());
app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => { res.render("pages/home") });

app.get("/projects", (req, res) => { res.render("pages/projects") });

app.get("/profile", (req, res) => { res.render("pages/profile") });

app.get("/impressum", (req, res) => {res.render("pages/impressum") });

app.get("/stammbaum", (req, res) => {
    res.render("pages/stammbaum", { StammbaumData : FStammbaumData })    
});

app.listen(PORT, () => { console.log(`Server started on Port ${PORT}`)});