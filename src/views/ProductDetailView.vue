<script setup>
	import { RouterLink, RouterView, useRoute } from 'vue-router';
	import { useProductsStore } from '@/stores/products';

	const route = useRoute();

	const products = useProductsStore();
	const product = products.findProductBySlug(route.params.slug);
</script>

<template>
	<h1>Detail {{ product.name }}</h1>
</template>
