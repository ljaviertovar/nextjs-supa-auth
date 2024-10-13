import { signUpAction } from '@/app/auth-actions'
import { FormMessage, Message } from '@/components/form-message'
import { SubmitButton } from '@/components/submit-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Signup({ searchParams }: { searchParams: Message }) {
	if ('message' in searchParams) {
		return (
			<div className='w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4'>
				<FormMessage message={searchParams} />
			</div>
		)
	}

	return (
		<section className='h-[calc(100vh-57px)] flex justify-center items-center'>
			<Card className='mx-auto w-full md:w-[340px]'>
				<CardHeader>
					<CardTitle className='text-2xl'>Sign Up</CardTitle>
					<CardDescription>Enter your email below to create an account</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<form id='login-form' className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' name='email' type='email' placeholder='m@example.com' required />
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='password'>Password</Label>
							<Input type='password' name='password' placeholder='Your password' minLength={6} required />
						</div>
						<SubmitButton pendingText='Signing In...' formAction={signUpAction}>
							Sign up
						</SubmitButton>
						<FormMessage message={searchParams} />
					</form>
					<p className='text-sm text-foreground text-center'>
						Already have an account?{' '}
						<Link href='/sign-in' className='text-foreground font-medium underline'>
							Sign in
						</Link>
					</p>
				</CardContent>
			</Card>
		</section>
	)
}
