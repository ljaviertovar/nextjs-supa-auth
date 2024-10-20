import { getUser } from '@/utils/auth'

export default async function ProfilePage() {
	const user = await getUser()

	return (
		<section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
			<h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
				My Profile
			</h1>
			<span
				className='max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl'
				style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit' }}
			>
				Manage your profile settings and preferences.
			</span>

			<div className='flex flex-col gap-2 items-start'>
				<h2 className='font-bold text-2xl mb-4'>Your user details</h2>
				<pre className='text-xs font-mono p-3 rounded border max-h-72 overflow-auto'>
					{JSON.stringify(user, null, 2)}
				</pre>
			</div>
		</section>
	)
}
