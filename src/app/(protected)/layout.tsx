import type { Metadata } from 'next'

import AppHeader from '@/components/app/header'
import AppHeaderMobile from '@/components/app/header-mobile'

export const metadata: Metadata = {
	title: 'NextSupaAuth',
	description: 'Next.js + Supabase Auth Starter',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<AppHeader />
			<AppHeaderMobile />
			<main className='container mx-auto w-full max-w-7xl'>{children}</main>
		</>
	)
}
