var app = require('express')();

app.use('/', function(req, res){
	res.send("Hello World, Successfully deployed app on Amazon.");
});

app.listen(3000, function(){
	console.log("server listening on Port:-3000");
});