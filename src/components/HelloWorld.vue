<script setup>
	defineProps({
		helloMessage: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<h1>{{ helloMessage }}</h1>
</template>
