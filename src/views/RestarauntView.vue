<script setup>
	import { useRoute } from 'vue-router';
	import { useRestarauntsStore } from '@/stores/restaraunts';

	const restaraunts = useRestarauntsStore();

	const route = useRoute();
	const restaraunt = restaraunts.getBySlug(route.params.slug);

	// const restaraunt = restaraunts.list.find(function (item) {
	// 	return route.params.slug === item.slug;
	// });

	console.log('restaraunt', restaraunt);
</script>

<template>
	<!-- <h1>{{ restaurant.name }}</h1> -->

	<pre>
		<code>
			{{restaraunts}}
		</code>
	</pre>

	<pre>
		<code>
			{{restaraunt}}
		</code>
	</pre>
</template>
