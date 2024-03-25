import Link from "next/link"

async function PersonalAccount() {
  return (
    <main>
      <p>PersonalAccount</p>

      <Link href={'/ru/admin/users'}>admin page</Link>
    </main>

  )
}

export default PersonalAccount
