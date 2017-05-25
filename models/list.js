var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var listSchema = new Schema({
	ownerid: 			{ type: String }, 	// id of user who create the list
	ownername: 		{ type: String }, 	// nickname of user who create the list
	listname: 		{ type: String }, 	// name of the list
	commentkey:   { type: String },		// Comment and observation of the list, rules, terms and conditions
	type:         { type: String }, 	// type of list, futbo, music, some other themes
	public:       { type: Boolean }, 	// public or privated list on dashboard
	dateevent: 		{ type: Date },  		// date of event to convoke
	datecreate: 	{ type: Date },			// date of creation of the list
	location:     { type: String },		// location of the meet,  place, site, web, etc
	maxuserslist: { type: Number },		// quantity of max users convoked
	numuserxteam: { type: Number },		// just to split the team and assign a group
	price:        { type: Number}, 		// price of convoke event or price by each convoker
	time:         {	type: String},		// duration of event
	avatarlist: 	{ type: String },		// img of avatar 
	eventopen:  	{ type: Boolean },	// status convoke event, open, closed
	users: [ {
		nickname: 		{ type: String }, // nick name of convoked
		name: 				{ type: String },	// first real name user
		confirm:  		{ type: Boolean },// confirm to convoke yes or no
		avatar: 			{ type: String }, // avatar of user
		cacheguest: 	{ type: String },	// info cache convoker
		asisted:      { type: Boolean } // to check if the convoker assisted 
	} ],
	chat: [{
		nickname:    	{ type: String }, 
		message: 			{ type: String },
		date:         { type: Date } 
	}] 
});


module.exports = mongoose.model('lists', listSchema);