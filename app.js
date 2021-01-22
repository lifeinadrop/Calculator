var express = require("express");
var app = express();
var path = require("path");

// set the view engine to ejs
app.set('view engine', 'html');
// use res.render to load up an ejs view file
// app.use( express.static(__dirname + "/public" ) );

app.use(express.static(path.join(__dirname, '/public')));

// index page
app.get('/', function(req, res) {
    res.render('index', {});
});

app.listen(3001, function () {
  console.log('App listening on port 3001!');
});
