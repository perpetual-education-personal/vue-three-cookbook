import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', function () {
	const items = ref([]);

	const count = computed(function () {
		return items.value.length;
	});

	function add(item) {
		items.value.push(item);
	}

	function clear() {
		items.value = [];
	}

	const decorated = computed(function () {
		return items.value.reduce(function (group, product) {
			group[product.id] = group[product.id] ?? [];
			group[product.id].push(product);
			return group;
		}, {});
	});

	// in the future we can use Array.groupBy

	return {
		items,
		count,
		add,
		clear,
		decorated,
	};
});
