<script lang="ts">
	import { goto } from '$app/navigation'
	import { message } from '$lib/stores'
	import { supabase } from '$lib/db'
	import EmailField from '$lib/components/inputs/EmailField.svelte'
	import Form from '$lib/components/Form.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import PasswordField from '$lib/components/inputs/PasswordField.svelte'
	import CheckboxField from '$lib/components/inputs/CheckboxField.svelte'

	/**
	 * State.
	 */
	let loading = false
	let email_sent = false

	let formData = {
		email: 'merlin.cornehl@web.de',
		password: 'password',
		remember: false
	}

	/**
	 * Methods.
	 */
	async function onLogin() {
		loading = true

		const { error } = await supabase.auth.signInWithPassword(formData)

		loading = false

		if (error instanceof Error) {
			return message.set(error.message)
		}

		goto('/wishlist')
	}

	async function onForgot() {
		const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
			// BUG
			// Seems like the redirection doesn't work because user is not yet logged in when the redirect happens
			redirectTo: 'http://localhost:5173/account?pw_reset'
		})

		if (error instanceof Error) {
			throw error
		}

		email_sent = true
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<PageTransition>
	<Form
		title="Login"
		on:submit={onLogin}>
		<EmailField
			required
			label="Email"
			bind:value={formData.email} />
		<PasswordField
			required
			label="Password"
			bind:value={formData.password} />
		<CheckboxField
			label="Remember me"
			bind:checked={formData.remember}
			value="remember" />
	</Form>
</PageTransition>
