<template>
	<div class="rooms-list">
		<h1>{{ msg }}</h1>
		<ul>
			<li @click="goToRoom(room.name)" v-for="room in rooms" :key="room.name">{{ room.name }}</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'RoomsList',
	props: {
		msg: String
	},
	computed: {
		...mapGetters(['rooms']),
		roomName() {
			return this.$route.params.roomName
		}
	},
	methods: {
		...mapActions(['setRoom']),
		goToRoom(roomName) {
			console.log(`roomName in list`, roomName)
			this.$emit('changeRoom', roomName)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rooms-list {
	grid-area: users;
	border: 1px solid black;
}
</style>
