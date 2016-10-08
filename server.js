var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
  bodyParser = require("body-parser"),
  session = require('express-session'),
  mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/controllers',express.static('controllers'));
app.use('/routes',express.static('routes'));


mongoose.connect('mongodb://localhost/futbol', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database Futbol');
  }
});

app.get('/', function(req, res){
	res.render('register');
});

app.get('/login', function(req, res){
  res.render('login');
});


routes = require('./routes/lists')(app);
routes = require('./routes/users')(app);

server.listen(3004, function(){
	console.log("Futbol Server running on port 3004");
});