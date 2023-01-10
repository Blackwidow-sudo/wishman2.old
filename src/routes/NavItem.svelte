<script lang="ts">
	import { page } from '$app/stores'

	/**
	 * Props.
	 */
	export let name: string = ''
	export let href: string = ''
	export let preload = false
</script>

<li class="hover:bg-indigo-600/70">
	<slot>
		<a
			class={$page.url.pathname === href
				? 'py-3 px-5 inline-block bg-indigo-700/70'
				: 'py-3 px-5 inline-block'}
			data-sveltekit-preload-data={preload ? 'hover' : 'off'}
			{href}>{name}</a>
	</slot>
</li>
