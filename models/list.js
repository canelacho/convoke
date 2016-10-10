var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var listSchema = new Schema({
	ownerid: 			{ type: String },
	ownername: 		{ type: String },
	listname: 		{ type: String },
	type:         { type: String }, // type of list, futbo, music, some other theme
	public:       { type: Boolean }, // public or privated list on dashboard
	dateevent: 		{ type: Date },
	datecreate: 	{ type: Date },
	maxuserslist: { type: Number },
	numuserxteam: { type: Number },
	price:        { type: Number}, 
	time:         {	type: String},
	listavatar: 	{ type: String },
	status:  			{ type: Boolean },
	users: [ {
		username: 		{ type: String },
		done:  				{ type: Boolean },
		userAvatar: 	{ type: String },
		cacheguest: 	{ type: String }
	} ]  
});


module.exports = mongoose.model('list', listSchema);