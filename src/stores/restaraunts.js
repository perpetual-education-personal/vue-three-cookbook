import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useRestarauntsStore = defineStore('restaraunts', () => {
	const list = ref([]);

	function getData() {
		const endpoint = 'https://raw.githubusercontent.com/perpetual-education/restaurants-data/main/data.json';
		const request = fetch(endpoint);

		request
			.then(function (data) {
				return data.json();
			})
			.then(function (json) {
				console.log('json: ', json);
				list.value = json;
			});
	}

	function getBySlug(slug) {
		return list.find(function (item) {
			return item.slug == slug;
		});
	}

	onMounted(getData);

	return {
		list,
		getBySlug,
	};
});
