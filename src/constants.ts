import { NavItem } from './types'

export const NAV_ITEMS: NavItem[] = [
	{
		title: 'How its works',
		path: '#how-its-works',
		icon: null,
	},
	{
		title: 'Pricing',
		path: '/pricing',
		icon: null,
		submenu: false,
		subMenuItems: [],
	},
]

export const NAV_APP_ITEMS: NavItem[] = [
	{
		title: 'Dashboard',
		path: '/app/dashboard',
		icon: null,
		submenu: false,
		subMenuItems: [],
	},
]
