import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { SubmitButton } from '@/components/submit-button'
import { FormMessage, Message } from '@/components/form-message'

import { signInAction } from '@/app/auth/actions'
import { isLogged } from '@/utils'

interface Props {
	searchParams: {
		message: Message
		callbackUrl?: string
	}
}

export default async function SignInPage({ searchParams }: Props) {
	await isLogged(searchParams.callbackUrl!)

	return (
		<section className='h-[calc(100vh-57px)] flex justify-center items-center'>
			<Card className='mx-auto w-full md:w-[340px]'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>Enter your email below to login to your account.</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<form id='login-form' className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' name='email' type='email' placeholder='email@example.com' required />
						</div>
						<div className='grid gap-2'>
							<div className='flex justify-between items-center'>
								<Label htmlFor='password'>Password</Label>
								<Link className='text-xs text-foreground underline' href='/auth/forgot-password'>
									Forgot Password?
								</Link>
							</div>
							<Input minLength={6} name='password' id='password' type='password' placeholder='Your password' required />
						</div>
						<SubmitButton pendingText='Signing In...' formAction={signInAction}>
							Sign in
						</SubmitButton>
						<FormMessage message={searchParams.message} />
					</form>
					{/* <OAuthButtons /> */}
					<p className='text-sm text-foreground text-center'>
						Don't have an account?{' '}
						<Link className='text-foreground font-medium underline' href='/auth/sign-up'>
							Sign up
						</Link>
					</p>
				</CardContent>
			</Card>
		</section>
	)
}
