import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Error404Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/pages/home')
  }, [])

  return null
}