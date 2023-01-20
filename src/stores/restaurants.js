import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useRestaurantsStore = defineStore('restaurants', () => {
	//
	const list = ref([
		{
			id: 'a',
			name: 'One',
			slug: 'one',
		},
		{
			id: 'b',
			name: 'Two',
			slug: 'two',
		},
	]);

	function getBySlug(slug) {
		return list.value.find(function (item) {
			return item.slug == slug;
		});
	}

	function getData() {
		const endpoint = 'https://raw.githubusercontent.com/perpetual-education/restaurants-data/main/data.json';
		const request = fetch(endpoint);

		request
			.then(function (data) {
				return data.json();
			})
			.then(function (json) {
				console.log('json fetched: ', json);
				list.value = json;
			});
	}

	onMounted(getData);

	return {
		list,
		getBySlug,
	};
});
