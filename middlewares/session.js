var User = require('../models/user');

module.exports = function(req, res, next){

	if(req.session.convoker){
		User.findById(req.session.convoker, function(err, doc){
			if(err || typeof 	(req.session.convoker) != 'undefined'){
				console.log('Sessison Created error: ' + err);
				res.redirect("/login");
			}else{
				console.log('Continue Sessison or Created... ok ');
				console.log(doc);
				res.locals = { user: doc };
				next();
			}
		});
	}	else {
		console.log("there is NO session");
		res.redirect("/login");
		
	}
}
