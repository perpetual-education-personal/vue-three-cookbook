import { ref } from 'vue';
import { defineStore } from 'pinia';
import productsData from '../static-data/products.json' assert { type: 'json' };

export const useProductsStore = defineStore('products', () => {
	const list = ref(productsData);

	function findProductBySlug(slug) {
		return list.value.find(function (item) {
			return item.slug == slug;
		});
	}

	return {
		list,
		findProductBySlug,
	};
});
