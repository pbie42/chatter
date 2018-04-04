<template>
	<div class="home-container">
		<form @submit.prevent>
			<h1>Welcome to Chatter</h1>
			<h3>Please choose a nickname to enter the conversation!</h3>
			<div class="room-input">
				<label for="nickname">Nickname:</label>
				<input type="text" name="nickname" v-model="nickname">
			</div>
			<button @click="enterChat">Submit</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'home',
	data() {
		return {
			nickname: ''
		}
	},
	methods: {
		...mapActions(['setNickname']),
		enterChat() {
			this.setNickname(this.nickname)
			this.$router.push({ name: 'room', params: { roomName: 'general' } })
			this.nickname = ''
		}
	}
}
</script>
