<script setup>
	import { useRestarauntsStore } from '@/stores/restaraunts';

	const restaraunts = useRestarauntsStore();
</script>

<template>
	<h1>Places</h1>

	<ul>
		<li v-for="item in restaraunts.list">
			<RouterLink :to="`/restaraunts/${item.slug}`">
				{{ item.name }}
			</RouterLink>
		</li>
	</ul>
</template>
