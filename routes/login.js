module.exports = function(app){

Convoker = require('../models/user.js');

loginConvoker = function(req, res){
	console.log('start to login a convoker');
	console.log(req.body.loginConvoker);

	Convoker.find({ email: req.body.loginConvoker.user }, function(err, User){

		if(User[0].email == req.body.loginConvoker.user && User[0].pwd == req.body.loginConvoker.pwd){
			console.log('User finded');
			console.log(User);
			req.session.Convoker = {
				id: User[0].id,
				user: User[0].name,
				email: User[0].email
			}
			res.send(User);
		} else {
			console.log('error User or Password not match or error ' + err);
		}
		
	});
};

registerNewConvoker = function(req, res){
	console.log(req.body.newRegister);

	var newUser = new Convoker({
		name: req.body.newRegister.nickName,
		email: req.body.newRegister.email,
		pwd: req.body.newRegister.pwd
	});

	newUser.save(function(err){
		if(!err){
			console.log('Convoker created ' + newUser.id);
			req.session.convoker = newUser.id
			console.log('session convoker: '+ req.session.convoker);

			res.send(newUser);
		} else {
			console.log('ERROR: ' + err);
			res.send(false)
		}
	});
};


// link routes

	app.post('/register', registerNewConvoker);

	app.post('/login', loginConvoker);

}