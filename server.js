var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
  bodyParser = require("body-parser"),
  session = require('express-session'),
  mongoose = require('mongoose');

var session_middleware = require('./middlewares/session.js');

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));
app.use('/controllers',express.static('controllers'));
app.use('/routes',express.static('routes'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'murcielago',
  resave: false,
  saveUninitialized: false
  }));

mongoose.connect('mongodb://localhost/convoke', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database Futbol');
  }
});

app.get('/convoke/:id', function(req, res){
	res.render('convoke', {"id":req.params.id});
});

app.get('/', function(req, res){
  res.render('login');
});

app.get('/logout', function(req, res){
  req.session.destroy(function(err) {
    if(!err){
      console.log(req.session);
      res.render('login');
    } else {
      console.log("Error destroying session: " + err);
    }
  });
});

routes = require('./routes/login')(app);
routes = require('./routes/lists')(app);
routes = require('./routes/users')(app);
routes = require('./routes/dashboard')(app);

server.listen(3004, function(){
	console.log("Futbol Server running on port 3004");
});