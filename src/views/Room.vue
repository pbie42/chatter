<template>
	<div class="chat-container">
		<UsersList msg="Welcome to Your Vue.js App" />
		<Messages />
		<MessageInput />
	</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import UsersList from '@/components/UsersList.vue'
import MessageInput from '@/components/MessageInput.vue'
import Messages from '@/components/Messages.vue'

export default {
	name: 'home',
	components: {
		UsersList,
		MessageInput,
		Messages
	},
	data() {
		return {}
	},
	computed: {
		roomName() {
			return this.$route.params.roomName
		}
	},
	methods: {
		...mapActions(['setRoom'])
	},
	created() {
		this.$socket.emit('setRoom', this.roomName)
	}
}
</script>
