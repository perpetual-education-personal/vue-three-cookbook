import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const storeRef = ref('store ref value');

	return {
		storeRef,
	};
});
