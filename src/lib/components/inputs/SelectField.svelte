<script lang="ts">
	/**
	 * Props.
	 */
	export let label: string
	export let value: string
	export let items: any[]
	export let itemText: string
	export let itemValue: string
</script>

<label class="block">
	<span class="text-gray-700">{label}</span>
	<select
		class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
		{...$$restProps}
		bind:value>
		{#each items as item}
			<option value={item[itemValue]}>{item[itemText]}</option>
		{/each}
	</select>
</label>
