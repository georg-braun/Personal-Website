const express = require("express");
const path = require('path');
const dTree = require("d3-dtree");
const d3 = require("d3");

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

var FFamilyTreeRelations = [{
    "name": "Niclas Superlongsurname",
    "class": "man",
    "textClass": "emphasis",
    "marriages": [{
      "spouse": {
        "name": "Iliana",
        "class": "woman",
        "extra": {
          "nickname": "Illi"
        }
      },
      "children": [{
        "name": "James",
        "class": "man",
        "marriages": [{
          "spouse": {
            "name": "Alexandra",
            "class": "woman"
          },
          "children": [{
            "name": "Eric",
            "class": "man",
            "marriages": [{
              "spouse": {
                "name": "Eva",
                "class": "woman"
              }
            }]
          }, {
            "name": "Jane",
            "class": "woman"
          }, {
            "name": "Jasper",
            "class": "man"
          }, {
            "name": "Emma",
            "class": "woman"
          }, {
            "name": "Julia",
            "class": "woman"
          }, {
            "name": "Jessica",
            "class": "woman"
          }]
        }]
      }]
    }]
  }];

app.get("/familytree/relations", (req, res) => {
    res.json(FFamilyTreeRelations);
});

app.listen(PORT, () => { console.log(`Server started on Port ${PORT}`)});