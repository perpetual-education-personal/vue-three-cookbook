<script setup>
	import { RouterLink, RouterView } from 'vue-router';

	const props = defineProps(['products']);
</script>

<template>
	<h1>List</h1>

	<ul>
		<li v-for="product in products.list">
			<RouterLink :to="`products/${product.slug}`">
				{{ product.name }}
			</RouterLink>
		</li>
	</ul>
</template>
