module.exports = function(app){

User = require('../models/user');

validatingLogin = function(req, res){

	// console.log('===============')
	// console.log(req.body.loginConvoker);
	// console.log('===============')
	// console.log(req.body)



	User.find({ name: req.body.loginConvoker.user }, function(err, User){

		if(User[0].name == req.body.loginConvoker.user && User[0].pwd == req.body.loginConvoker.pwd){
			console.log('User finded');
			console.log(User);
			req.session.Convoker = {
				id: User[0].id,
				user: User[0].name,
				email: User[0].email
			}
			res.locals.ConvokerLocal = req.session.Convoker;
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


	// API ROUTES

	app.post('/register', registerNewConvoker);

	app.post('/login', validatingLogin);

}