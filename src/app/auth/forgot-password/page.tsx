import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { SubmitButton } from '@/components/submit-button'
import { FormMessage, Message } from '@/components/form-message'

import { forgotPasswordAction } from '@/app/auth/actions'

export default function ForgotPassword({ searchParams }: { searchParams: Message }) {
	return (
		<section className='h-[calc(100vh-57px)] flex justify-center items-center'>
			<Card className='mx-auto w-full md:w-[340px]'>
				<CardHeader>
					<CardTitle className='text-2xl'>Reset Password</CardTitle>
					<CardDescription>Enter your email below to reset your password.</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<form id='login-form' className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input id='email' name='email' type='email' placeholder='email@example.com' required />
						</div>

						<SubmitButton formAction={forgotPasswordAction}>Reset Password</SubmitButton>

						<FormMessage message={searchParams} />
					</form>

					<p className='text-sm text-foreground text-center'>
						Already have an account?{' '}
						<Link className='text-foreground font-medium underline' href='/auth/sign-up'>
							Sign in
						</Link>
					</p>
				</CardContent>
			</Card>
		</section>
	)
}
