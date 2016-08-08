var app = require('express')();

app.use('/', function(req, res){
	res.send("Hello World, Successfully deployed app on Amazon.");
});

app.listen(9000, function(){
	console.log("server listening on Port:-9000");
});
