<script lang="ts">
	import SubmitButton from './buttons/SubmitButton.svelte'

	/**
	 * Props.
	 */
	export let title: string
	export let loading: boolean = false
</script>

<form
	class="flex flex-col gap-3 max-w-sm mx-auto"
	{...$$restProps}
	on:submit|preventDefault>
	<fieldset class="flex flex-col gap-2">
		<legend class="mb-4">
			<h2 class="text-3xl font-medium">{title}</h2>
		</legend>
		<slot />
		<slot name="actions">
			<SubmitButton
				{loading}
				block
				center>Submit</SubmitButton>
		</slot>
	</fieldset>
</form>
