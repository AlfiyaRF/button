var http = require("http").Server();
var io = require("socket.io")(http);
var port = process.env.PORT || 3001;

var state = "OFF"; //initial state
var connCount = 0;

io.on("connection", function(socket){
	connCount += 1; //count of connections

	// change the button's state and send it to all connections
	socket.on("btn state", function(btn){
		if (btn === "OFF") {
			state = "ON"
		} else {
			state = "OFF"
		}
		io.emit("btn state", state);
	});

	// send the button's state to the new connection
	socket.emit("btn state", state);

	// if all connections close, the button's state will become "OFF"
	socket.on("disconnect", () => {
		console.log('one connection is closed')
		connCount -= 1;
		if (connCount === 0) {
			console.log('all connections are closed')
			state = "OFF"
		}
	});
});

http.listen(port, function(){
	console.log("listening on *:" + port);
});
