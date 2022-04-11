const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/usersdb'
mongoose.connect(connectionURL, {useNewUrlParser: true}, 
	(err) => {
	if (!err) {
      console.log("Success!")
	} else {
		console.log("Error!")
	} });

module.exports= mongoose