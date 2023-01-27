import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', function () {
	const favorites = ref([]);

	function toggleFavorite(itemId) {
		if (favorites.value.includes(itemId)) {
			favorites.value.splice(favorites.value.indexOf(itemId), 1);
		} else {
			favorites.value.push(itemId);
		}
		console.log(favorites.value);
	}

	return {
		favorites,
		toggleFavorite,
	};
});
