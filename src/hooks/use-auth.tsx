import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'

import { createClient } from '@/utils/supabase/client'

export default function useAuth() {
	const [userData, setUserData] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getUser = async () => {
			setLoading(true)
			const {
				data: { user },
			} = await createClient().auth.getUser()

			setUserData(user)
			setLoading(false)
		}

		getUser()
	}, [])

	return { userData, loading }
}
