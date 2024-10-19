import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signOutAction } from '@/app/auth/actions'
import { User } from '@supabase/supabase-js'

interface Props {
	user: User
}

export function UserNav({ user }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='relative h-8 w-8 rounded-full'>
					<Avatar className='h-9 w-9'>
						<AvatarImage
							src={user.user_metadata?.image ? user.user_metadata?.image : '/img/avatars/01.png'}
							alt={user.user_metadata?.username ?? user.user_metadata?.name ?? ''}
						/>
						<AvatarFallback>UU</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56' align='end' forceMount>
				<DropdownMenuLabel className='font-normal'>
					<div className='flex flex-col space-y-2'>
						<p className='text-sm font-medium leading-none'>
							{user.user_metadata?.username ?? user.user_metadata?.name}
						</p>
						<p className='text-xs leading-none text-muted-foreground'>{user.user_metadata?.email}</p>
					</div>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<Link className='block w-full h-6 text-sm text-left' href='/app/profile'>
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<form action={signOutAction}>
						<Button variant={'ghost'} size={'sm'} className='w-full h-6' type='submit'>
							Sign Out
						</Button>
					</form>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
