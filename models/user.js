var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema({
	name: 			{ type: String },
	email: 			{ type: String },
	pwd: 			{ type: String },
	genere: 		{ type: String },
	birth: 			{ type: Date },
	datecreate: 	{ type: String },
	nationality:  	{ type: String },
	createfromip: 	{ type: String },
	list: [ {
		idlist: 	{ type: String },
		namelist:  	{ type: String },
		datecreate: { type: Date }
	} ]  
});


module.exports = mongoose.model('user', userSchema);