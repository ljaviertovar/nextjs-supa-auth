export default async function Index() {
	return (
		<section className='container w-full '>
			<div className='grid place-content-center h-screen mb-96'>
				<h1 className='font-sans text-balance font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center'>
					Next.js 14 Server Actions and Supabase / Auth.
				</h1>
				<p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto text-center mt-8'>
					A demo todo app that utilises Supabase for databse and auth, combined with NextJS 14 Server Actions.
				</p>
			</div>
		</section>
	)
}
