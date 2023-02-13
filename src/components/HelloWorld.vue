<script setup>
	import { computed } from 'vue';
	const props = defineProps(['fruit', 'stuff', 'list']);

	// props.fruit = 'Banana'; // no
	// props.fruit.value = 'Banana'; // no

	// props.stuff.name = 'ASfddsA'; // no

	console.log(props.fruit);
	// props.fruit.value = 'as';
	// console.log(props.fruit.value);

	console.log('x', props.list);

	// const filtered = computed(function () {
	// 	return props.list.reverse();
	// });
</script>

<template>
	<h1>{{ fruit }}</h1>

	<h2>{{ stuff }}</h2>

	<ul>
		<li v-for="item in list">
			{{ item }}
		</li>
	</ul>
</template>
