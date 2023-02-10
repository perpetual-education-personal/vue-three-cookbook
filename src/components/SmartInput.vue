<script setup>
	import { ref, onMounted, computed } from 'vue';

	const props = defineProps(['incomingValue']);

	const original = ref(props.incomingValue);

	const field = ref(''); // new value - temp?

	onMounted(function () {
		field.value = props.incomingValue;
	});

	function undo() {
		field.value = original.value;
	}

	const changed = computed(function () {
		return original.value !== field.value;
	});
</script>

<template>
	<div>
		<input type="text" v-model="field" :class="{ changed: changed }" />

		<p>Original: {{ original }}</p>
		<p>New: {{ field }}</p>
		<p>Changed? {{ changed }}</p>

		<button @click="undo()">Undo</button>
	</div>
</template>

<style scoped>
	input.changed {
		background-color: hsla(40, 100%, 50%, 0.3);
	}
	div {
		padding: 30px 0;
	}

	/* 
		Next steps: What if you have a bunch of different input types?
		Can you set this up to work for any input type?
	*/
</style>
