import Logo from '@/components/logo'
import AuthButtons from '@/components/auth/auth-buttons'

export default function AppHeader() {
	return (
		<header className='sticky top-0 z-50 transition-shadow w-full'>
			<div className='container mx-auto max-w-7xl px-2 lg:px-4 flex h-14 justify-between items-center'>
				<div className='flex items-center gap-4'>
					<Logo />
				</div>

				<div className='flex-1'>
					<AuthButtons />
				</div>
			</div>
		</header>
	)
}
