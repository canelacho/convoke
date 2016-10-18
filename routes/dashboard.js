module.exports = function(app){

var User = require('../models/user.js'),
		Lists = require('../models/list.js');
		Session = require('../middlewares/session.js');

// load = function(req, res){
// 	console.log('We are here in dashboard');
// 	console.log('convoker id loged: ' + req.session.convoker._id);
// 	console.log('+++++++++++++++++++++++++++++++');
// 	console.log(req.session);
// 	console.log('+++++++++++++++++++++++++++++++');
// 	if(typeof req.session.convoker[0].id == 'undefined'){
// 		res.render('login');
// 	} else {
// 		res.send(true);
// 	}
// }

findAll = function(req, res){
	console.log('We are here in dashboard');
	console.log('id loged: ' + req.session.id);
	console.log('convoker id loged: ' + req.session.Convoker.id);

	Lists.find({ 'ownerid': req.session.Convoker.name },
  function(err, lists){
      if(!err){
        console.log("My lists " + lists);
        res.render('dashboard', lists);
      } else {
        console.log("error finding lists: " + err );
      }
    })

}

// link routes
// app.get('/dashboard', load);
app.get('/dashboard/:id', findAll)
// findList
// addList 
// deleteList
// updateList
}