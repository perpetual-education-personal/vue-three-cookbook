<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { useProductsStore } from '@/stores/products';

	const products = useProductsStore();
</script>

<template>
	<h1 class="loud-voice">Products</h1>

	<section>
		<RouterView :products="products" />
	</section>
</template>
