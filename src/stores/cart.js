import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', function () {
	const items = ref([]);

	const count = computed(function () {
		return items.value.length;
	});

	function add(id) {
		items.value.push(id);
		localStorage.setItem('myData', JSON.stringify(items.value));
	}

	function clear() {
		items.value = [];
		localStorage.setItem('myData', []);
	}

	return {
		items,
		count,
		add,
		clear,
	};
});
