<script setup>
	import { RouterLink, RouterView } from 'vue-router';

	const props = defineProps(['products']);
</script>

<template>
	<p>ProductListView</p>
	<h1>Products</h1>

	<ul>
		<li v-for="product in products.list">
			<RouterLink :to="`products/${product.slug}`">
				{{ product.name }}
			</RouterLink>
		</li>
	</ul>
</template>
