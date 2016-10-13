module.exports = function(app){

registerUser = function(req, res){
	console.log('Test passed, register user ok...');
	console.log("veamos validate" +  req.body);
	console.log(req.body.newRegister);
	// res.send(req.body.newRegister);
	res.json(200);

}


// link routes

	app.post('/register', registerUser);

}