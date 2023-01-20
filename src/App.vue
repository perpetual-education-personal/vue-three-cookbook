<script setup>
	import { RouterLink, RouterView, useRoute } from 'vue-router';
	import HelloWorld from './components/HelloWorld.vue';
	import ProjectLogo from './components/graphics/ProjectLogo.vue';

	const route = useRoute();
</script>

<template>
	<header>
		<div class="wrapper">
			<pre>
            <code>
               {{route.fullPath}}
            </code>  
         </pre>

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
						<RouterLink to="/restaurants">Restaurants</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<RouterView />
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
