var express = require('express'),
  	app = express(),
    port = 3004,
    methodOverride = require('method-override'),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');
    session = require('express-session'),
    session_middleware = require('./middlewares/session.js'), 


mongoose.connect('mongodb://localhost/convoke', function(err, res) {
  if(err) console.log('ERROR: connecting to Database. ' + err);
  else console.log('Connected to Database Convoke');
});


app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(__dirname + '/public'));
app.use('/controllers',express.static('controllers'));
app.use(session({
  secret: 'murcielago',
  resave: false,
  saveUninitialized: false
}));


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

require('./routes/routes_login')(app);
require('./routes/routes_lists')(app);
require('./routes/routes_users')(app);
require('./routes/routes_dashboard')(app);

app.listen(port, function(){
	console.log('Futbol Server running on port ' + port);
});