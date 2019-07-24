///dependancies///
var express = require('express');
////port///
var PORT = process.env.PORT || 3007;


var app = express();


////PBULIC///
app.use(express.static('public'));


////middleware///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////handlebars///
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


////routes////
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);


///listen///
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});