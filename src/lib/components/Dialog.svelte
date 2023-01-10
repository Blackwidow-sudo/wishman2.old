<!--
@component

@props
	- `open`
	- `title?`
	- `persistent?`
	- `noBackdrop?`

@slots
	- `title`
	- `content`
	- `actions`
-->
<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { backdropOpen } from '$lib/stores'
	import { fly, type FlyParams } from 'svelte/transition'

	/**
	 * Props.
	 */
	export let noBackdrop = false
	export let open: boolean
	export let persistent = false
	export let title = ''

	/**
	 * State & component variables.
	 */
	const flyParams: FlyParams = {
		duration: 200,
		y: -200
	}

	/**
	 * Methods.
	 */
	const dispatch = createEventDispatcher()

	function onClose() {
		if (!persistent) {
			open = false
			dispatch('close')
		}
	}

	function onSave() {
		dispatch('save')
	}

	function onEsc(e: KeyboardEvent) {
		e.key === 'Escape' && onClose()
	}

	$: if (open && !noBackdrop) {
		backdropOpen.set(true)
	} else backdropOpen.set(false)
</script>

<!-- Modal -->
{#if open}
	<div
		class="modal block z-10 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
		id="exampleModal"
		tabindex="-1"
		aria-labelledby="modalLabel"
		aria-modal="true"
		role="dialog"
		autofocus
		transition:fly={flyParams}
		on:click|self={onClose}
		on:keydown={onEsc}>
		<div class="modal-dialog max-w-lg my-7 mx-auto relative w-auto pointer-events-none">
			<div
				class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
				<div
					class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
					<h5
						class="text-xl font-medium leading-normal text-gray-800"
						id="modalLabel">
						<slot name="title">
							{title}
						</slot>
					</h5>
					<button
						type="button"
						class="box-content -mt-0.5 pb-1 text-3xl leading-6 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
						aria-label="Close"
						on:click={onClose}>
						<span>&times;</span>
					</button>
				</div>
				<div class="modal-body relative p-4">
					<slot name="content" />
				</div>
				<div
					class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
					<slot name="actions">
						<button
							type="button"
							class="px-5 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
							data-bs-dismiss="modal"
							on:click={onClose}>
							Close
						</button>
						<button
							type="button"
							class="px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
							on:click={onSave}>
							Save
						</button>
					</slot>
				</div>
			</div>
		</div>
	</div>
{/if}
