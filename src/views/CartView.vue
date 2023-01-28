<script setup>
	import { useCartStore } from '@/stores/cart';

	const cart = useCartStore();
</script>

<template>
	<ul v-if="cart.count > 0">
		<li v-for="group in cart.decorated">
			<h2>{{ group[0].name }} ({{ group.length }})</h2>
		</li>
	</ul>

	<button v-if="cart.count" @click="cart.clear()">Clear cart</button>

	<p v-if="cart.count == 0">There is nothing in your cart yet.</p>

	<pre><code>{{ cart.decorated }}</code></pre>
</template>
