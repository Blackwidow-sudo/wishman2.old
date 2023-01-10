<script lang="ts">
	import '../app.scss'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { supabase } from '$lib/db'
	import Message from '$lib/components/misc/Message.svelte'
	import Navbar from './Navbar.svelte'
	import '$lib/helpers'

	/**
	 * State.
	 */
	const pages = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'My Wishlist',
			href: '/wishlist'
		},
		{
			name: 'Testpage',
			href: '/testpage'
		}
	]

	/**
	 * Lifecycle methods.
	 */
	onMount(() => {
		// https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#synchronizing-the-page-store
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})
</script>

<Navbar {pages} />
<slot />
<Message />
