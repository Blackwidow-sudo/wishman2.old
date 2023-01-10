<script lang="ts">
	import { goto } from '$app/navigation'
	import { message } from '$lib/stores'
	import { supabase } from '$lib/db'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import Form from '$lib/components/Form.svelte'
	import TextField from '$lib/components/inputs/TextField.svelte'
	import EmailField from '$lib/components/inputs/EmailField.svelte'
	import PasswordField from '$lib/components/inputs/PasswordField.svelte'

	/**
	 * State.
	 */
	const formData = {
		username: '',
		email: '',
		password: '',
		pw_confirm: ''
	}

	/**
	 * Methods.
	 */
	async function onSubmit() {
		if (formData.password !== formData.pw_confirm) {
			return message.set("Your passwords didn't match!")
		}

		const { error } = await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
			options: { data: { username: formData.username } }
		})

		if (error instanceof Error) {
			return message.set(error.message)
		}

		goto('/login')
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<PageTransition>
	<Form
		title="Register"
		on:submit={onSubmit}>
		<TextField
			required
			label="Username"
			bind:value={formData.username} />
		<EmailField
			required
			label="Email"
			bind:value={formData.email} />
		<PasswordField
			required
			label="Password"
			bind:value={formData.password} />
		<PasswordField
			required
			label="Confirm password"
			bind:value={formData.pw_confirm} />
	</Form>
</PageTransition>
