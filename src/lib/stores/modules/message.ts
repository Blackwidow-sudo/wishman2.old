import { writable } from 'svelte/store'

const message = writable<string | null>(null)

export default message
