import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', function () {
	const items = ref([]);

	const count = computed(function () {
		return items.value.length;
	});

	function add(id) {
		items.value.push(id);
	}

	return {
		items,
		count,
		add,
	};
});
