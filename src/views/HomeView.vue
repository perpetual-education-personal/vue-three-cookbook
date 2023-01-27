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

	const favoritesOnly = computed(function () {
		return restaurants.list.filter(function (item) {
			return user.favorites.includes(item.id);
		});
	});
</script>

<template>
	<h1>Favorites</h1>

	<ul class="restaurant-list" v-if="favoritesOnly.length">
		<li v-for="item in favoritesOnly">
			<RestaurantCard :restaurant="item" @toggle="toggleFavorite" />
		</li>
	</ul>

	<p v-else>You don't seem to have decided on any favorite places yet!</p>
</template>

<style scoped></style>
