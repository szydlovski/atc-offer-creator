<template>
	<div class="atc-creator-container">
		<private-view>
			<iframe src="https://airtoursclub-website.netlify.app/creator" style="width: 100%; height: 100%; border: none;"
				allowfullscreen />
		</private-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.atc-creator-container {
	width: 100%;
	height: 100%;
}

.atc-creator-container .module-nav {
	display: none !important;
}

.atc-creator-container .header-bar {
	display: none !important;
}
</style>
