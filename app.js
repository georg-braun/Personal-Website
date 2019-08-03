var express = require("express");
var path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
