import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SubmitButton } from '@/components/submit-button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { FormMessage, Message } from '@/components/form-message'

import { signInAction } from '@/app/auth/actions'

export default function Login({ searchParams }: { searchParams: Message }) {
	return (
		<section className='h-[calc(100vh-57px)] flex justify-center items-center'>
			<Card className='mx-auto w-full md:w-[340px]'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>Enter your email below to login to your account</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<form id='login-form' className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' name='email' type='email' placeholder='m@example.com' required />
						</div>
						<div className='grid gap-2'>
							<div className='flex justify-between items-center'>
								<Label htmlFor='password'>Password</Label>
								<Link className='text-xs text-foreground underline' href='/forgot-password'>
									Forgot Password?
								</Link>
							</div>
							<Input minLength={6} name='password' id='password' type='password' required />
						</div>
						<SubmitButton pendingText='Signing In...' formAction={signInAction}>
							Sign in
						</SubmitButton>
						<FormMessage message={searchParams} />
					</form>
					{/* <OAuthButtons /> */}
					<p className='text-sm text-foreground text-center'>
						Don't have an account?{' '}
						<Link className='text-foreground font-medium underline' href='/sign-up'>
							Sign up
						</Link>
					</p>
				</CardContent>
			</Card>
		</section>
	)
}
