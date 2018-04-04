import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		nickname: '',
		room: '',
		connect: false
	},
	getters: {
		nickname(state) {
			return state.nickname
		},
		currentRoom(state) {
			return state.room
		}
	},
	mutations: {
		setRoom(state, roomName) {
			state.room = roomName
		},
		setNickname(state, nickname) {
			state.nickname = nickname
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
		socket_testing({ commit }, roomName) {
			console.log(`we are in the room:`, roomName)
			commit('setRoom', roomName)
		},
		socket_setRoom: (context, roomName) => {
			console.log(`We really in here`)
			// if (!roomName) throw new Error('Undefined Room Name')
		}
	}
})
