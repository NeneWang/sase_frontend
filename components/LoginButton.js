import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <a >

          {session.user.email}
          <button onClick={() => signOut()}>Sign out</button>
        </a>
      </>
    )
  }
  return (
    <>

      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}