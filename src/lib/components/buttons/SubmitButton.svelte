<script lang="ts">
	import Spinner from '../misc/Spinner.svelte'

	export let center: boolean = false
	export let block: boolean = false
	export let loading: boolean = false
</script>

<button
	type="submit"
	class="py-2 px-4 border bg-green-400 hover:bg-green-500 rounded-md"
	class:block
	class:mx-auto={center}
	{...$$restProps}
	on:click>
	{#if loading}
		<Spinner size="sm" />
	{:else}
		<slot />
	{/if}
</button>
