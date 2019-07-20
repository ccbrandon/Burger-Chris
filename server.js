///dependancies///
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
////port///
var PORT = process.env.PORT || 3000;

////PBULIC///
app.use(express.static('public'));


////middleware///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


////routes////
var routes = ('../controllers/burgers_contollers.js');
app.use(routes);


///listen///
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});