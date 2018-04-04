var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const users = []

io.on('connection', function(socket) {
	console.log('a user connected')
	io.emit('connect')

	console.log(`socket.id`, socket.id)

	socket.on('joinRoom', function(roomName) {
		console.log(`User would like to join ${roomName}`)
	})

	socket.on('setRoom', function({ roomName, nickname }) {
		console.log(`entering room: ${roomName}`)
		socket.nickname = nickname
		users.push({ nickname, id: socket.id })
		socket.join(roomName)
		io.to(roomName).emit('setName', roomName)
	})

	socket.on('leaveRoom', function(roomName) {
		console.log(`leaving room:`, roomName)
		socket.leave(roomName)
	})

	socket.on('getRoom', function(roomName) {
		const roomUsers = []
		io.in(roomName).clients((err, clients) => {
			clients.forEach(client => {
				roomUsers.push(users.find(user => user.id === client))
			})
		})
		io.to(roomName).emit('roomUsers', roomUsers)
	})

	socket.on('test', function() {
		console.log(`test`)
		io.emit('setRoom')
	})

	socket.on('newMessage', function({ newMessage, roomName }) {
		console.log(`new message homie`, newMessage)
		const user = users.find(user => user.id === socket.id)
		io.emit('newMessage', { newMessage, roomName, userName: user.nickname })
	})
})

http.listen(3000, function() {
	console.log('listening on *:3000')
})
