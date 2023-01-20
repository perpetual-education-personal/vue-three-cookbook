<script setup>
	import { useRoute } from 'vue-router';
	import { useRestaurantsStore } from '@/stores/restaurants';

	const route = useRoute();
	const restaurants = useRestaurantsStore();

	const restaurant = restaurants.getBySlug(route.params.slug);
</script>

<template>
	<h1 class="loud-voice">{{ restaurant.name }}</h1>

	<ul>
		<li v-for="item in restaurant.menuItems">
			{{ item.name }}
		</li>
	</ul>
</template>
