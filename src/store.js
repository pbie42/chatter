import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {
			nickname: '',
			room: ''
		},
		connect: false,
		rooms: [{ name: 'general', messages: [] }, { name: 'help', messages: [] }]
	},
	getters: {
		nickname(state) {
			return state.user.nickname
		},
		currentRoom(state) {
			return state.user.room
		},
		rooms(state) {
			return state.rooms
		},
		roomMessages(state) {
			return roomName => {
				const room = state.rooms.find(room => room.name === roomName)
				if (room && room.messages) return room.messages
			}
		}
	},
	mutations: {
		setRoom(state, roomName) {
			state.user.room = roomName
		},
		setNickname(state, nickname) {
			state.user.nickname = nickname
		},
		newMessage(state, { newMessage, roomName, userName }) {
			const room = state.rooms.find(room => room.name === roomName)
			room.messages.push({ message: newMessage, userName: userName })
		},
		SOCKET_CONNECT(state, status) {
			console.log(`connected`)
			state.connect = true
		},
		SOCKET_SET_ROOM(state, roomName) {
			console.log(`setting room`)
			state.room = roomName
		}
	},
	actions: {
		setNickname({ commit }, nickname) {
			commit('setNickname', nickname)
		},
		setRoom({ commit }, roomName) {
			commit('setRoom', roomName)
		},
		socket_setRoom: (context, roomName) => {
			console.log(`We really in here`)
			// if (!roomName) throw new Error('Undefined Room Name')
		},
		socket_newMessage({ commit }, data) {
			commit('newMessage', data)
		}
	}
})
