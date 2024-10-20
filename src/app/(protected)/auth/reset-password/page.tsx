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
					<form id='reset-password-form' className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='password'>New password</Label>
							<Input type='password' name='password' placeholder='Your new password' minLength={6} required />
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='confirmPassword'>Confirm password</Label>
							<Input
								type='password'
								name='confirmPassword'
								placeholder='Confirm your password'
								minLength={6}
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
