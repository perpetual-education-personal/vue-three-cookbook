<script setup>
	import { ref, reactive } from 'vue';
	import { useCounterStore } from '@/stores/counter';
	import HelloWorld from '@/components/HelloWorld.vue';

	const example = ref('hello');

	const counter = useCounterStore();

	const fruit = ref('Apple');

	console.log('example', example); // ref
	console.log('example', example.value); // ref

	console.log(counter.storeRef); // no .value...

	counter.storeRef = 'asfdads'; // ?

	console.log(counter.storeRef); // no .value...

	counter.storeRef = 'TEST'; //'get'

	// counter.storeRef.value = 'TEST'; 'set' // breaks

	const stuff = reactive({ name: 'vegitable' });

	const list = ref(['one', 'two', 'three']);
</script>

<template>
	<h1>Home page</h1>

	{{ example }}

	<h2>{{ stuff }}</h2>

	<HelloWorld :fruit="fruit" :stuff="stuff" :list="list" />

	{{ counter.storeRef }}
</template>

<style>
	/*
		counter.storeRef = "asdfda" // wont work - because ?
	*/
</style>
