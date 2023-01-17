<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { useProductsStore } from '@/stores/products';

	const products = useProductsStore();
</script>

<template>
	<div class="outlet">
		<RouterView :products="products" />
	</div>
</template>
