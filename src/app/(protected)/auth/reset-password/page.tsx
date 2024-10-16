import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SubmitButton } from '@/components/submit-button'

import { FormMessage, Message } from '@/components/form-message'

import { resetPasswordAction } from '@/app/auth/actions'

export default async function ResetPassword({ searchParams }: { searchParams: Message }) {
	return (
		<section className='h-[calc(100vh-57px)] flex justify-center items-center'>
			<Card className='mx-auto w-full md:w-[340px]'>
				<CardHeader>
					<CardTitle className='text-2xl'>Reset password</CardTitle>
					<CardDescription>Please enter your new password below.</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<form id='login-form' className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='password'>New Password</Label>
							<Input minLength={6} name='password' id='password' type='password' placeholder='New password' required />
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='password'>Confirm Password</Label>
							<Input
								minLength={6}
								type='password'
								id='confirmPassword'
								name='confirmPassword'
								placeholder='Confirm password'
								required
							/>
						</div>
						<SubmitButton formAction={resetPasswordAction}>Reset password</SubmitButton>
						<FormMessage message={searchParams} />
					</form>
				</CardContent>
			</Card>
		</section>
	)
}
