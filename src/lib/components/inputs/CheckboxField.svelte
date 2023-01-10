<script lang="ts">
	/**
	 * Props.
	 */
	export let label: string
	export let value: string
	export let checked: boolean
</script>

<label class="inline-flex items-center">
	<input
		class="form-checkbox rounded border-gray-300 text-indigo-600 shadow-md focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
		type="checkbox"
		{...$$restProps}
		bind:checked
		bind:value />
	<span class="ml-2 text-gray-700">{label}</span>
</label>
