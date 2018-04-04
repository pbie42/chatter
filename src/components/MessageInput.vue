<template>
	<div class="message-input">
		<input @keyup.enter="newMessage" type="text" v-model="message">
	</div>
</template>

<script>
export default {
	name: 'MessageInput',
	data() {
		return {
			message: ''
		}
	},
	methods: {
		newMessage() {
			this.$socket.emit('newMessage', this.message)
			this.message = ''
		}
	}
}
</script>

<style scoped>
.message-input {
	grid-area: input;
	border: 1px solid black;
	height: 100%;
	width: 100%;
}
.message-input input {
	height: 100%;
	width: 100%;
}
</style>
