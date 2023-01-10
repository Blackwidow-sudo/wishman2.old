<script lang="ts">
	/**
	 * Props.
	 */
	export let label: string
	export let value: string
</script>

<label class="block">
	<span class="text-gray-700">{label}</span>
	<input
		class="form-input block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
		type="email"
		placeholder="john@example.com"
		{...$$restProps}
		bind:value />
</label>
