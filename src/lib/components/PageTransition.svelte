<script lang="ts">
	import { fade } from 'svelte/transition'

	/**
	 * Props.
	 */
	export let inParams = {
		delay: 100,
		duration: 100
	}

	export let outParams = {
		duration: 100
	}
</script>

<div
	class="container mx-auto my-5"
	in:fade={inParams}
	out:fade={outParams}>
	<slot />
</div>
