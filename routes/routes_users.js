module.exports = function(app) {

var User = require('../models/user.js');


findAllUsers = function(req, res){
  User.find({},
  function(err, user){
      if(!err){
        console.log("My user " + user);
        res.send(user);
      } else {
        console.log("error finding user: " + err );
      }
    })
};



findUser = function(req, res){
	User.find({"_id": req.params.id},
    function(err, user){
        if(!err){
          console.log("User finded " + user);
          res.send(user);
        } else {
          console.log("error finding user: " + err );
        }
      })
};



addUser = function(req, res){
	console.log("Adding new user");
	console.log(req.body);

	var user = new User ({
		name: 				req.body.name,
		email: 				req.body.email,
		pwd: 					req.body.pwd,
		genere: 			req.body.genere,
		birth: 				req.body.birth,
		datecreate: 	Date(),
		nationality: 	req.body.nationality, 
		createfromip: req.body.ip
	});

	user.save(function(err){
		if(!err){
			console.log("User created");
		} else {
			console.log("Error creating user " + err)
		}
	});

	res.send(user);
};



deletedUser = function(req, res){
  User.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(!err) {
				console.log('User Removed');
				res.send(user);
			} else {
				console.log('ERROR: ' + err);
			}
		})
  });
};


	// API ROUTES

app.get('/user/findAll/',findAllUsers); 
app.get('/user/find/:id',findUser); 
app.post('/user/add/',addUser); 
app.delete('/user/delete/:id',deletedUser); 
}