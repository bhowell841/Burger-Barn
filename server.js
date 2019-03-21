// requires
const express = require("express");
const handlebars = require("express-handlebars");

// port
const PORT = process.env.PORT || 8080;
const app = express();

// forget why we need this
app.use(express.static("public"));

// tell express we are using json and parsing
app.use(express.urlencoded({ entended: true }));
app.use(express.json());

// tell it we are using handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start listening
app.listen(PORT, () => {
    console.log("Listening on localhost " + PORT);
});