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
//get
app.get('/', function (req, res) {

})
//post

//update

//delete


///listen///
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});