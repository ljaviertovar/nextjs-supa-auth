import type { Metadata } from 'next'

import Header from '@/components/header'

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
			<Header />
			<main className='flex flex-col items-center'>{children}</main>
		</>
	)
}
