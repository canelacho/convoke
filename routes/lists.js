module.exports = function(app) {

var Lists = require('../models/list.js');

//GET - Return list of user 
findMyLists = function(req, res) {
  Lists.find({"owner": req.params.id},
    function(err, lists){
        if(!err){
          console.log("My Lists " + lists);
          res.send(lists);
        } else {
          console.log("error finding lists: " + err );
        }
      })
};


//GET - Return list to work 
findList = function(req, res) {
	Lists.find({"_id": req.params.id},
    function(err, list){
        if(!err){
          console.log("List finded " + list);
          res.send(list);
        } else {
          console.log("error finding list: " + err );
        }
      })
};


//POST - Create new List 
addList = function(req, res){

};


//PUT - Insert a new player in the DB
addUserToList = function(req, res) {
  // Use List Id to work
	var dataUser =  {
		listId: req.body.listid,
		name: req.body.name,
		status: true,
		pictureLink: "/avatar/dog.jpg",
    cacheGuest: req.body.cacheguest
	};

  console.log(dataUser);

 	Lists.update(
    { "_id" : dataUser.listId },
    { $addToSet: 
    	{ "users" : 
    		{ $each: 
						[{"username" : dataUser.name, "done" : dataUser.status, "userAvatar": dataUser.pictureLink, "cacheguest": dataUser.cacheGuest}]
				} 
			} 
		},
    function(err, data){
        if(!err){
          console.log("User added");
          res.send(data);
        } else {
          console.log("error adding user: " + err );
        }
      }
  );  
   
};



//DELETE - Delete list
removeList = function(req, res){
  Lists.findById(req.params.id, function(err, list) {
    list.remove(function(err) {
      if(!err) {
        console.log('List Removed');
        res.send(list);
      } else {
        console.log('ERROR: ' + err);
      }
    })
  });
};



//DELETE - Delete player on list
removeUserFromList = function(req, res){
  // Use List Id to work

  var dataUser =  {
    listId: req.query.listid,
    name: req.query.name, 
  };
  console.log(dataUser);
  
 
  Lists.update(
      { _id : dataUser.listId },
      { $pull: { users : { username: dataUser.name } } },
      function(err, data){
        if(!err){
          console.log("User deleted");
          res.send(data);
        } else {
          console.log("error deleting user: " + err );
        }
      }
  );

};


// link routes
app.get('/list/:id',findList); // list to work with
app.get('/lists/:id',findMyLists); // lists of user
app.post('/list/:id',addList);
app.delete('/list/remove/:id', removeList);

app.put('/list/user/', addUserToList);
app.delete('/list/user/', removeUserFromList);

}