<script setup>
	import { useRestaurantsStore } from '@/stores/restaurants';

	const restaurants = useRestaurantsStore();
</script>

<template>
	<h1>Places</h1>

	<ul>
		<li v-for="item in restaurants.list">
			<RouterLink :to="`/restaurants/${item.slug}`">
				{{ item.name }}
			</RouterLink>
		</li>
	</ul>
</template>
