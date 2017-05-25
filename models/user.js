var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema({
	avatar: 			{ type: String },
	name: 				{ type: String },
	lastname: 		{ type: String }, 
	email: 				{ type: String },
	nickname:			{ type: String },
	pwd: 					{ type: String },
	genere: 			{ type: String },
	birth: 				{ type: Date },
	datecreate: 	{ type: Date },
	nationality:  { type: String },
	createfromip: { type: String },
	list: [ {
		ownername:  { type: String },
		idlist: 		{ type: String },
		avatarlist: { type: String },
		namelist:  	{ type: String },
		dateevent: 	{ type: Date },
		confirm:  	{ type: Boolean },
	} ],
	notifications: [{
		date:       { type: Date }, // date of notificacions generated
		type:       { type: String }, // friend request, convoke event, update, etc 
		message: 	  { type: String },
		viewed: 		{ type: Boolean }
	}],
	friends: [{
		nickname:		{ type: String },
		name: 			{ type: String },
		email: 			{ type: String },
		since: 			{ type: Date }
	}]  
});


module.exports = mongoose.model('users', userSchema);