var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

io.on('connection', function(socket) {
	console.log('a user connected')
	io.emit('connect')

	socket.on('joinRoom', function(roomName) {
		console.log(`User would like to join ${roomName}`)
	})

	socket.on('setRoom', function(roomName) {
		socket.join(roomName)
		io.to(roomName).emit('testing', roomName)
		console.log(`User would like to set ${roomName}`)
	})

	socket.on('test', function() {
		console.log(`test`)
		io.emit('setRoom')
	})

	socket.on('newMessage', function(newMessage) {
		console.log(`new message homie`, newMessage)
		io.emit('newMessage', newMessage)
	})
})

http.listen(3000, function() {
	console.log('listening on *:3000')
})
