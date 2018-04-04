<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
* {
	user-select: none;
	box-sizing: border-box;
}

html {
	font-size: 10px;
}

body {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	margin: 0;
	font-family: 'Quicksand', sans-serif;
	min-width: 500px;
}

.chat-container {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	overflow-y: scroll;
	margin: 0;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 9fr 1fr;
	grid-template-areas:
		'users messages'
		'users input';
}

.home-container {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	overflow-y: scroll;
	margin: 0;
	display: flex;
	justify-content: center;
}

h1,
h2,
h3,
h4,
h5,
p {
	margin: 0;
	padding: 0;
}
</style>
