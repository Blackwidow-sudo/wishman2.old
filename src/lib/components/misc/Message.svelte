<script lang="ts">
	import { message } from '$lib/stores'
	import { fade } from 'svelte/transition'

	/**
	 * State.
	 */
	let show = false

	/**
	 * Methods.
	 */
	function onClose() {
		show = false
	}

	message.subscribe(msg => {
		if (typeof msg === 'string') {
			show = true
			setTimeout(() => (show = false), 5000)
		}
	})
</script>

{#if show}
	<div
		class="fixed flex flex-row gap-1 bottom-0 right-0 mr-2 mb-2 bg-slate-200 rounded"
		transition:fade={{ duration: 200 }}>
		<span class="px-4 py-2">
			{$message}
		</span>
		<button
			class="px-4 py-2 text-3xl leading-none text-slate-400 hover:text-black"
			on:click={onClose}>
			&times;
		</button>
	</div>
{/if}
