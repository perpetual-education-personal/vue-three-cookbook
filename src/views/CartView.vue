<script setup>
	import { useCartStore } from '@/stores/cart';

	const cart = useCartStore();
</script>

<template>
	<ul v-if="cart.count > 0">
		<li v-for="item in cart.items">
			{{ item }}
		</li>
	</ul>

	<p v-if="cart.count == 0">There is nothing in your cart yet.</p>
</template>
