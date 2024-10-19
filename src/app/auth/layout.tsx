// export default async function Layout({ children }: { children: React.ReactNode }) {
// 	return <div className='max-w-7xl flex flex-col gap-12 items-start'>{children}</div>
// }

import type { Metadata } from 'next'
import './globals.css'

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
			<main className='flex flex-col items-center'>{children}</main>
		</>
	)
}
