<template>
	<div class="messages">

	</div>
</template>

<script>
export default {
	name: 'Messages',
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
