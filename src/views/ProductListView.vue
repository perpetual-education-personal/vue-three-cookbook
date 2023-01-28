<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { useCartStore } from '@/stores/cart';

	const props = defineProps(['products']);

	const cart = useCartStore();
</script>

<template>
	<p>ProductListView</p>
	<h1>Products</h1>

	<ul>
		<li v-for="product in products.list">
			<button @click="cart.add(product)">{{ product.name }}</button>
		</li>
	</ul>
</template>
