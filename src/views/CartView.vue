<script setup>
	import { useCartStore } from '@/stores/cart';

	const cart = useCartStore();
</script>

<template>
	<ul v-if="cart.count > 0">
		<li v-for="id in cart.items">item id: {{ id }}</li>
	</ul>

	<button v-if="cart.count" @click="cart.clear()">Clear cart</button>

	<p v-if="cart.count == 0">There is nothing in your cart yet.</p>
</template>
