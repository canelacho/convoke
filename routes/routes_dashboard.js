module.exports = function(app){

var User    = require('../models/user'),
		Lists   = require('../models/list');
		Session = require('../middlewares/session');


// 	if(typeof req.session.convoker[0].id == 'undefined'){
// 		res.render('login');
// 	} else {
// 		res.send(true);
// 	}
// }

// load = function (req, res) {
//   res.send('hello world');
// }

findMyStuffs = function(req, res) {
// console.log('We are here in dashboard');
//  console.log('=============')
//  console.log('Data from session: ' + JSON.stringify(req.session, null, 2))
//  console.log('=============')
// console.log('id loged: ' + req.session.id);// console.log('convoker id loged: ' + req.session.Convoker.id);

	Lists.find({ 'ownerid': req.session.Convoker.name },
    function(err, lists){
      if(!err){
        console.log("My lists " + lists);
        res.render('private/dashboard', lists);
      } else {
        console.log("error finding lists: " + err );
      }
  })
}

// API ROUTES

// app.get('/private/dashboard', load);
app.get('/app/dashboard/:id', findMyStuffs)
// findList
// addList 
// deleteList
// updateList
}