import Link from 'next/link'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { NAV_ITEMS } from '@/constants'

export default function Navbar() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{NAV_ITEMS.map((item, idx) => (
					<NavigationMenuItem key={idx}>
						<Link href={item.path} legacyBehavior passHref>
							<NavigationMenuLink className='font-medium text-muted-foreground transition-colors mx-2 hover:text-primary'>
								{item.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
