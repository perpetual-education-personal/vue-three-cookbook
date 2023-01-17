import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ProductListView from '../views/ProductListView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/products',
			name: 'products',
			component: ProductsView,
			children: [
				{
					path: '',
					name: 'list',
					component: ProductListView,
				},
				{
					path: ':slug',
					name: 'detail',
					component: ProductDetailView,
				},
			],
		},
	],
});

export default router;
