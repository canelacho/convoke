var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
  bodyParser = require("body-parser"),
  session = require('express-session'),
  mongoose = require('mongoose');

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));
app.use('/controllers',express.static('controllers'));
app.use('/routes',express.static('routes'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(session())

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

//       var ip;
// if (req.headers['x-forwarded-for']) {
//     ip = req.headers['x-forwarded-for'].split(",")[0];
// } else if (req.connection && req.connection.remoteAddress) {
//     ip = req.connection.remoteAddress;
// } else {
//     ip = req.ip;
// }console.log("client IP is *********************" + ip);

  res.render('login');
});

routes = require('./routes/login')(app);
routes = require('./routes/lists')(app);
routes = require('./routes/users')(app);


server.listen(3004, function(){
	console.log("Futbol Server running on port 3004");
});