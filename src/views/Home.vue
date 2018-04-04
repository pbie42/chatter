<template>
	<div class="home-container">
		<form @submit.prevent>
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

<style>
.home-container form {
	margin-top: 50vh;
	display: flex;
	flex-flow: column;
}

.room-input {
	display: flex;
	justify-content: space-between;
}
</style>
