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

	async function getData() {
		const endpoint = 'https://raw.githubusercontent.com/perpetual-education/restaurants-data/main/data.json';
		const responsce = await fetch(endpoint);
		const json = await responsce.json();
		list.value = json;
	} // doesn't account for errors for brevity -

	onMounted(getData);

	return {
		list,
		getBySlug,
	};
});
