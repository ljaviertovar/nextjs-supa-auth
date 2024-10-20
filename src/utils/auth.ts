import { redirect } from 'next/navigation'

import { createClient } from './supabase/server'

export async function isLogged(callbackUrl: string) {
	const supabase = createClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (session && session.user) {
		redirect(callbackUrl || '/')
	}
}

export async function getUser() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return user
}
