import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RestarauntsView from '../views/RestarauntsView.vue';
import RestarauntView from '../views/RestarauntView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/restaraunts',
			name: 'restaraunts',
			component: RestarauntsView,
		},
		{
			path: '/restaraunts/:id',
			name: 'restaraunts-detail',
			component: RestarauntView,
		},
	],
});

export default router;
