var mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

module.exports = function(){
	
	mongoose.connect("mongodb://jeffgoes:jeffventurus123@ds155815.mlab.com:55815/users", { useNewUrlParser: true })
	mongoose.connection.once('open', function(){
		console.log("Connection has beem made");
	}).on('error', function(error){
		console.log("Connection error: ", error);
  });
}