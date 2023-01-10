<script lang="ts">
	import { page } from '$app/stores'
	import PageTransition from '$lib/components/PageTransition.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<PageTransition>
	{#if !$page.data.session}
		<h1>I am not logged in</h1>
	{:else}
		<h1>Welcome {$page.data.session.user.email}</h1>
		<p>I am logged in!</p>
	{/if}
</PageTransition>
