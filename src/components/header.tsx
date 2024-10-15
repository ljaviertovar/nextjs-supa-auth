import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { createClient } from '@/utils/supabase/server'
import { signOutAction } from '@/app/auth/actions'

export default async function Header() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<header className='z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 max-w-screen-2xl items-center'>
				<nav className='flex items-center space-x-4 lg:space-x-6'>
					<a className='mr-6 flex items-center space-x-2' href='/'>
						<span className='font-bold'>NextSupaAuth</span>
					</a>
				</nav>
				<div className='flex flex-1 items-center justify-end space-x-2'>
					{user !== null ? (
						<form action={signOutAction} className='flex items-center gap-2'>
							<p>{user.email}</p>
							<Button type='submit'>Sign Out</Button>
						</form>
					) : (
						<Button asChild>
							<Link href='/auth/sign-in'>Sign In</Link>
						</Button>
					)}
				</div>
			</div>
		</header>
	)
}
