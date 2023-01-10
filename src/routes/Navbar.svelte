<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { supabase } from '$lib/db'
	import NavItem from './NavItem.svelte'

	/**
	 * Types.
	 */
	interface Page {
		name: string
		href: string
	}

	/**
	 * Props.
	 */
	export let pages: Page[]

	/**
	 * Methods.
	 */
	async function onLogout() {
		try {
			const { error } = await supabase.auth.signOut()

			if (error) throw error

			goto('/login')
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			}
		}
	}
</script>

<nav
	class="bg-indigo-600/70 flex flex-row justify-between sticky top-0 backdrop-blur-sm text-white shadow-xl">
	<ul class="flex flex-row">
		{#each pages as { name, href } (name)}
			<NavItem
				preload
				{name}
				{href} />
		{/each}
	</ul>
	<ul class="flex flex-row justify-between">
		{#if $page.data.session}
			<!-- Authenticated users -->
			<NavItem
				name="Account"
				href="/account" />
			<NavItem>
				<button
					class="py-3 px-5 inline-block"
					on:click={onLogout}>Logout</button>
			</NavItem>
		{:else}
			<!-- Anonymous users -->
			<NavItem
				name="Register"
				href="/register" />
			<NavItem
				name="Login"
				href="/login" />
		{/if}
	</ul>
</nav>

<style lang="scss">
	nav,
	nav button {
		text-shadow: 1px 1px 1px black;
	}
</style>
