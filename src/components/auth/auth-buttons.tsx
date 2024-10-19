import Link from 'next/link'

// import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '../ui/button'
import useAuth from '@/hooks/use-auth'

export default function AuthButtons() {
	const { userData, loading } = useAuth()

	if (loading) {
		return (
			<div className='flex justify-end gap-4'>
				{/* <Skeleton className='h-9 w-9 rounded-full' /> */}
				Cargando
			</div>
		)
	}

	return (
		<div className='flex justify-end gap-4'>
			{userData ? (
				// <UserNav user={user} />
				<>aqui</>
			) : (
				<>
					<Button asChild size={'sm'} variant={'secondary'}>
						<Link href='/auth/sign-in'>Sign In</Link>
					</Button>
					<Button size={'sm'} asChild>
						<Link href='/auth/sign-up'>Sign Up</Link>
					</Button>
				</>
			)}
		</div>
	)
}
