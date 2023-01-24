<script setup>
	import { ref, reactive, computed } from 'vue';
	import { useAppStore } from '@/stores/app';

	const app = useAppStore();

	const passwordVisibility = ref(false);

	function togglePasswordVisibility() {
		passwordVisibility.value = !passwordVisibility.value;
	}

	const inputType = computed(function () {
		if (passwordVisibility.value) {
			return 'text';
		} else {
			return 'password';
		}
	});

	const input = reactive({
		username: '',
		password: '',
	});

	function login() {
		app.user = {
			username: input.username,
		};
	}
</script>

<template>
	<h1>Login {{ inputType }}</h1>

	<form @submit.prevent="login()">
		<div class="field">
			<label for="u">Username</label>
			<input id="u" type="text" v-model="input.username" />
		</div>

		<div class="field">
			<label for="p">Password</label>
			<input id="p" :type="inputType" v-model="input.password" />
			<button type="button" @click.prevent="togglePasswordVisibility()">e</button>

			<p>{{ input.username }} : {{ input.password }}</p>
		</div>

		<button type="submit">Submit</button>
	</form>
</template>
