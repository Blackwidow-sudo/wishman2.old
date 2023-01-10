import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { openRoutes } from '$lib/global'
import { redirect } from '@sveltejs/kit'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async event => {
	const { session } = await getSupabase(event)

	if (!session && !openRoutes.includes(event.url.pathname)) {
		// See https://kit.svelte.dev/docs/load#redirects
		throw redirect(307, '/login')
	}

	return { session }
}
