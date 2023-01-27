<script setup>
	defineProps(['name']);
</script>

<template>
	<div :class="`icon ${name}`">
		<svg :class="`icon-${name}`"><use :xlink:href="`#icon-${name}`"></use></svg>
	</div>
</template>

<style></style>
