<template>
	<div class="users-list">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'UsersList',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users-list {
	grid-area: users;
	border: 1px solid black;
}
</style>
