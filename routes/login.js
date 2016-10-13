module.exports = function(app){

registerUser = function(req, res){
	console.log('Test passed, register user ok...');
	console.log(req.body.newRegister);
	res.send(req.body.newRegister);

}


// link routes

	app.post('/register', registerUser);

}