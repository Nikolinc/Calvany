import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const set = (key: string, value: string) => {
    const encodedSearchQuery = encodeURI(value)
    router.push(pathname + '?' + createQueryString(key, encodedSearchQuery))
  }

  return { set }
}
