<script lang="ts">
	import { invalidate } from '$app/navigation'
	import { message } from '$lib/stores'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'
	import { supabase } from '$lib/db'
	import Form from '$lib/components/Form.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import PasswordField from '$lib/components/inputs/PasswordField.svelte'
	import type { PageData } from './$types'

	/**
	 * Props.
	 */
	export let data: PageData

	/**
	 * State.
	 */
	let password = ''
	let pw_confirm = ''
	let expand = false

	/**
	 * Methods.
	 */
	async function onSubmit() {
		if (password !== pw_confirm) {
			return message.set("Couldn't confirm password")
		}

		const { error } = await supabase.auth.updateUser({
			password
		})

		if (error instanceof Error) {
			throw error
		}

		invalidate('user:profile')
	}

	/**
	 * Lifecycle methods.
	 */
	onMount(() => {
		if ($page.url.searchParams.has('pw_reset')) {
			expand = true
		}
	})
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<PageTransition>
	{#if data.profile}
		<p>{JSON.stringify(data.profile)}</p>
	{:else}
		<p>no profile</p>
	{/if}
	<div class="max-w-sm mx-auto">
		<button
			type="button"
			class="block w-full border rounded px-2 py-1 shadow-md bg-slate-100 hover:bg-slate-200"
			on:click={() => (expand = !expand)}>Change Password</button>
		{#if expand}
			<div
				class="border rounded p-4"
				transition:slide={{ duration: 200 }}>
				<Form
					title="Change password"
					on:submit={onSubmit}>
					<PasswordField
						id="password"
						label="New Password"
						bind:value={password} />
					<PasswordField
						id="pw_confirm"
						label="Confirm new password"
						bind:value={pw_confirm} />
				</Form>
			</div>
		{/if}
	</div>
</PageTransition>
