export type Message = { success: string } | { error: string } | { message: string }

export function FormMessage({ message }: { message: Message }) {
	console.log(message)
	return (
		<div className='flex flex-col gap-2 w-full max-w-md text-sm'>
			{'success' in message && <div className='text-green-500 border-l-2 border-green-500 px-4'>{message.success}</div>}
			{'error' in message && <div className='text-destructive border-l-2 border-destructive px-4'>{message.error}</div>}
			{'message' in message && <div className='text-blue-500 border-l-2 border-blue-500 px-4'>{message.message}</div>}
		</div>
	)
}
