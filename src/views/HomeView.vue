<script setup>
	// import { ref } from 'vue';
	// import AboutView from '@/views/AboutView.vue';
	const x = ref('hi');
</script>

<template>
	<h1>Home page</h1>

	{{ x }}

	<AboutView />
	<HelloWorld />
</template>
