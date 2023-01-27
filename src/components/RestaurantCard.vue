<script setup>
	import { computed } from 'vue';
	import { RouterLink } from 'vue-router';
	import SvgIcon from '@/components/SvgIcon.vue';

	defineProps({
		restaurant: Object,
	});
	const emit = defineEmits(['toggle']);

	function toggleFav(id) {
		emit('toggle', id);
		console.log('toggleFav');
	}
</script>

<template>
	<article class="restaurant-card card" :class="{ favorite: restaurant.favorite }">
		<picture>
			<img src="https://peprojects.dev/images/landscape.jpg" alt="$todo" />
		</picture>

		<h2 class="name">{{ restaurant.name }}</h2>

		<RouterLink :to="`/restaurants/${restaurant.slug}`"> Visit </RouterLink>

		<button @click="toggleFav(restaurant.id)">
			<SvgIcon name="heart" />
		</button>
	</article>
</template>

<style scoped>
	.card {
		position: relative;
	}

	button {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
