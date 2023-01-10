import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async event => {
	event.depends('user:profile')

	const { session, supabaseClient } = await getSupabase(event)

	if (!session) {
		throw redirect(303, '/')
	}

	const { data: profileData, error } = await supabaseClient.from('profiles').select().single()

	if (error instanceof Error) {
		throw error
	}

	return {
		profile: profileData
	}
}
