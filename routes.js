var express = require("express");
var path = require("path");
var router = express.Router();
var converter = require("./converter");

// Middleware

router.use(express.static(path.join(__dirname, "data")));

// Routes

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/projects", (req, res) => {
  res.render("pages/projects", { Articles: Articles });
});

router.get("/profile", (req, res) => {
  res.render("pages/profile");
});

router.get("/impressum", (req, res) => {
  res.render("pages/impressum");
});

router.get("/projects/familytree", (req, res) => {
  res.render("pages/projects/familytree");
});

router.get("/projects/familytree-description", (req, res) => {
  res.render("pages/projects/project-familytree-description");
});

router.get("/projects/website-description", (req, res) => {
  res.render("pages/projects/project-website-description");
});

var familyTreeRelations = require("./data/familyRelations.json");
router.get("/familytree/relations", (req, res) => {
  res.json(familyTreeRelations);
});

var Articles = [];
converter.importArticles("./data/articles", article => {
  router.get(article.route, (req, res) => {
    res.render("pages/article", { article: article });
  });
  Articles.push(article);
});

module.exports = router;
