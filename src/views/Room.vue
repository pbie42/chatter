<template>
	<div class="chat-container">
		<RoomTitle />
		<RoomsList @changeRoom="goToRoom" />
		<Messages />
		<MessageInput />
	</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import RoomsList from '@/components/RoomsList.vue'
import MessageInput from '@/components/MessageInput.vue'
import Messages from '@/components/Messages.vue'
import RoomTitle from '@/components/RoomTitle.vue'

export default {
	name: 'home',
	components: {
		RoomTitle,
		RoomsList,
		MessageInput,
		Messages
	},
	data() {
		return {}
	},
	computed: {
		...mapGetters(['nickname']),
		roomName() {
			return this.$route.params.roomName
		}
	},
	methods: {
		...mapActions(['setRoom']),
		goToRoom(roomName) {
			this.$router.push({ name: 'room', params: { roomName } })
		}
	},
	created() {
		if (!this.nickname) this.$router.push({ name: 'home' })
		this.setRoom(this.roomName)
		this.$socket.emit('setRoom', {
			roomName: this.roomName,
			nickname: this.nickname
		})
	},
	updated() {
		this.$socket.emit('setRoom', {
			roomName: this.roomName,
			nickname: this.nickname
		})
	},
	beforeRouteUpdate(to, from, next) {
		this.$socket.emit('leaveRoom', this.roomName)
		this.$socket.emit('setRoom', {
			roomName: to.params.roomName,
			nickname: this.nickname
		})
		this.setRoom(to.params.roomName)
		next()
	}
}
</script>
