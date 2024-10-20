import type { Metadata } from 'next'

import AppHeader from '@/components/app/header'

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
			<main className='container mx-auto w-full max-w-7xl px-2 lg:px-4'>{children}</main>
		</>
	)
}
