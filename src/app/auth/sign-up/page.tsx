import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SubmitButton } from '@/components/submit-button'
import { FormMessage, Message } from '@/components/form-message'

import { signUpAction } from '@/app/auth/actions'
import { isLogged } from '@/utils'

interface Props {
	searchParams: {
		message: Message
		callbackUrl?: string
	}
}

export default async function SignUpPage({ searchParams }: Props) {
	await isLogged(searchParams.callbackUrl!)

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
							<Input id='email' name='email' type='email' placeholder='email@example.com' required />
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='password'>Password</Label>
							<Input type='password' name='password' placeholder='Your password' minLength={6} required />
						</div>
						<SubmitButton pendingText='Signing Up...' formAction={signUpAction}>
							Sign up
						</SubmitButton>
						<FormMessage message={searchParams.message} />
					</form>
					<p className='text-sm text-foreground text-center'>
						Already have an account?{' '}
						<Link href='/auth/sign-in' className='text-foreground font-medium underline'>
							Sign in
						</Link>
					</p>
				</CardContent>
			</Card>
		</section>
	)
}
