<script setup>
	import { onMounted } from 'vue';
	import { watch } from 'vue';
	import { RouterLink, RouterView } from 'vue-router';
	import HelloWorld from './components/HelloWorld.vue';
	import ProjectLogo from './components/graphics/ProjectLogo.vue';
	import { useCartStore } from '@/stores/cart';

	const cart = useCartStore();

	onMounted(function () {
		if (localStorage.getItem('myData')) {
			cart.items = JSON.parse(localStorage.getItem('myData'));
		} else {
			// nothin
		}
	});

	watch(cart, function (newState, oldState) {
		if (newState !== oldState) {
			localStorage.setItem('myData', JSON.stringify(newState.items));
		}
	});
</script>

<template>
	<header>
		<div class="wrapper">
			<nav class="site-menu">
				<ul>
					<li>
						<HelloWorld helloMessage="V3C" />
					</li>

					<li>
						<RouterLink class="home-link" to="/">
							<ProjectLogo />
						</RouterLink>
					</li>

					<li>
						<RouterLink to="/">Home</RouterLink>
					</li>

					<li>
						<RouterLink to="/products">Products</RouterLink>
					</li>

					<li>
						<RouterLink to="/cart">
							{{ cart.count }}
						</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<div class="outlet">
		<RouterView />
	</div>
</template>

<style>
	.site-menu ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		list-style: none; /* $todo */
	}
	.site-menu a:not(.home-link) {
		padding: 20px;
	}
	.home-link {
		display: block;
		max-width: 30px;
		padding: 10px;
	}
</style>
