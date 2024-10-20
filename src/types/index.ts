export type NavItem = {
	onlySideNavItem?: boolean
	label: string
	path: string
	icon: JSX.Element | null
	submenu?: boolean
	subMenuItems?: NavItem[]
}
