import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
	const user = ref(false);

	const loggedIn = computed(function () {
		if (user == true) {
			return true;
		} else {
			return false;
		}
	});

	return {
		user,
		loggedIn,
	};
});
