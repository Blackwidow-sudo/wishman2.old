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
		class="form-radio"
		type="radio"
		{...$$restProps}
		bind:value />
</label>
