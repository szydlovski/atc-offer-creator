<template>
	<private-view title="My Custom Module">
		<template #navigation>Hello from navigation!</template>
		<div style="background-color: red;">Hello world!</div>
	</private-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
