<script lang="ts">
	import { fade, type FadeParams } from 'svelte/transition'

	/**
	 * Props.
	 */
	export let inParams: FadeParams = {
		delay: 100,
		duration: 50
	}

	export let outParams: FadeParams = {
		duration: 50
	}
</script>

<div
	class="container mx-auto my-5"
	in:fade={inParams}
	out:fade={outParams}>
	<slot />
</div>
