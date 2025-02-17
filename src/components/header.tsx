'use client'

import Logo from '@/components/logo'
import Navbar from '@/components/navbar'

import AuthButtons from './auth/auth-buttons'

import { useScrollPosition } from '@/hooks/use-scroll-position'

export default function Header() {
	const scrollPosition = useScrollPosition()

	return (
		<header
			className={`sticky top-0 z-50 transition-shadow w-full
  ${
		scrollPosition > 56
			? 'bg-background/40 shadow bg-opacity-60 backdrop-blur-lg backdrop-filter border-b'
			: 'bg-trasparent shadow-none'
	}
  `}
		>
			<div className='hidden container mx-auto max-w-7xl px-2 lg:px-4 lg:flex h-14 justify-between items-center'>
				<div className='flex items-center gap-4'>
					<Logo />

					<div className='flex  w-full justify-center'>
						{' '}
						<Navbar />
					</div>
				</div>

				<div className='flex-1'>
					<AuthButtons />
				</div>
			</div>
		</header>
	)
}
