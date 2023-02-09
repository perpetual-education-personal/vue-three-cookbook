<script setup>
	defineProps({
		helloMessage: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<span>{{ helloMessage }}</span>
</template>
