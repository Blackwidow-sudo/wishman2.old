<script lang="ts">
	import { onMount } from 'svelte'

	export let size: 'sm' | 'md' | 'lg'

	let spinner: HTMLSpanElement

	const sizeMap = {
		sm: 24,
		md: 48,
		lg: 96
	}

	onMount(() => {
		const mapped = sizeMap[size]
		const borderWidth = Math.floor(mapped / 6).toString()

		spinner.style.width = `${mapped}px`
		spinner.style.height = `${mapped}px`
		spinner.style.borderWidth = `${borderWidth}px`
	})
</script>

<span
	bind:this={spinner}
	class="loader" />

<style lang="scss">
	.loader {
		display: block;
		border-style: solid;
		border-color: #f3f3f3;
		border-top-color: #3498db;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
