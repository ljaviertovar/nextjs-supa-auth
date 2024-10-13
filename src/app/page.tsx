export default async function Index() {
	return (
		<section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
			<div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
				<h1 className='font-sans text-balance font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
					Next.js 14 Server Actions and Supabase / Auth.
				</h1>
				<p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
					A demo todo app that utilises Supabase for databse and auth, combined with NextJS 14 Server Actions.
				</p>
			</div>
		</section>
	)
}
