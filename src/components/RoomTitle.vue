<template>
	<div class="room-title">
		<h1>{{ roomName }}</h1>
	</div>
</template>

<script>
export default {
	name: 'room-title',
	computed: {
		roomName() {
			return this.$route.params.roomName
		}
	}
}
</script>

<style scoped>
.room-title {
	grid-area: title;
}
</style>
