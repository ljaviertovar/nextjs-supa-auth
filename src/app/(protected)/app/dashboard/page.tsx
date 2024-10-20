import { redirect } from 'next/navigation'

import { InfoIcon } from 'lucide-react'

import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/auth/sign-in')
	}

	return (
		<section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
			<h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
				Dashboard
			</h1>
			<div className='mt-12 bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center'>
				<InfoIcon size='16' strokeWidth={2} />
				This is a protected page that you can only see as an authenticated user
			</div>
		</section>
	)
}
