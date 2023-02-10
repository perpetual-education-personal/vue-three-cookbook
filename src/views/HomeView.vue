<script setup>
	import { ref } from 'vue';
	import SmartInput from '@/components/SmartInput.vue';

	const exampleContextText = ref('Apple');

	const two = ref('Banana');
</script>

<template>
	<h1>Smart input / check if value updated</h1>

	<SmartInput :incomingValue="exampleContextText" />

	<SmartInput :incomingValue="two" />
</template>
