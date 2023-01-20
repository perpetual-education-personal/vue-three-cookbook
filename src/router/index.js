import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RestaurantsView from '../views/RestaurantsView.vue';
import RestaurantView from '../views/RestaurantView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/restaurants',
			name: 'restaurants',
			component: RestaurantsView,
		},
		{
			path: '/restaurants/:slug',
			name: 'restaurants-detail',
			component: RestaurantView,
		},
	],
});

export default router;
