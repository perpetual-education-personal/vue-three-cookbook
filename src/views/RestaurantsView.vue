<script setup>
	import { computed } from 'vue';

	import { useRestaurantsStore } from '@/stores/restaurants';
	import { useUserStore } from '@/stores/User';

	import RestaurantCard from '@/components/RestaurantCard.vue';

	const restaurants = useRestaurantsStore();
	const user = useUserStore();

	//// TOGGLE FAVORITE --
	function toggleFavorite(rname) {
		console.log('toggleFavorite', rname);
		user.toggleFavorite(rname);
	}

	function isFavorite(item) {
		if (user.favorites.includes(item.id)) {
			return true;
		} else {
			return false;
		}
	}

	const userDecoratedRestaurants = computed(function () {
		return restaurants.list.map(function (item) {
			return {
				...item,
				favorite: isFavorite(item),
			};
		});
	});
</script>

<template>
	<h1>Restaurants</h1>

	<ul class="restaurant-list">
		<li v-for="item in userDecoratedRestaurants">
			<RestaurantCard :restaurant="item" @toggle="toggleFavorite" />
		</li>
	</ul>
</template>

<style scoped>
	.restaurant-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
	}
</style>
