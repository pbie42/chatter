<template>
	<div class="messages">
		<h1 v-for="(message, index) in roomMessages(roomName)" :key="index">user: {{ message.userName }} - {{ message.message }}</h1>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Messages',
	computed: {
		...mapGetters(['roomMessages']),
		roomName() {
			return this.$route.params.roomName
		}
	},
	sockets: {
		connect() {
			console.log(`This shit is connected bruh`)
		},
		newMessage(newMessage) {
			console.log(`There is a new message homie:`, newMessage)
		}
	}
}
</script>

<style>
.messages {
	grid-area: messages;
	border: 1px solid black;
}
</style>
