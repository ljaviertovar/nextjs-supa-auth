import type { Metadata } from 'next'

import Header from '@/components/header'
import HeaderMobile from '@/components/header-mobile'

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
			<HeaderMobile />
			<main className='flex flex-col items-center bg-red-300'>{children}</main>
		</>
	)
}
