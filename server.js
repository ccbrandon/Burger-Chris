///dependancies///
var express = require('express');
////port///
var PORT = process.env.PORT || 3000;

var exphbs = require('express-handlebars');
var app = express();


////PBULIC///
app.use(express.static('public'));


////middleware///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


////routes////
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);


///listen///
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});