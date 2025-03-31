<template>
	<private-view title="My Custom Module">
		<iframe src="https://airtoursclub-website.netlify.app/creator" style="width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
	</private-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style>
.module-nav {
	display: none !important;
}
.header-bar {
	display: none !important;
}
</style>
