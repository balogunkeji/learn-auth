'use client'

import './style.css'
import Link from 'next/link'
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

function Navbar() {
  const { data: session } = useSession()
  console.log(session, 'user')

  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='/'>NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            Blog
          </Link>
        </li>

        {session ? (
          <>
            <h1>{session?.user?.name}</h1><li>
            <Link href={'/login'}>
              <button onClick={() => signOut()}>
                Logout
              </button>
            </Link>
            </li>
          </>
        ) : <li>
            <Link href='/api/auth/signin' onClick={e => {
                  e.preventDefault()
                  signIn('/login')
                }}>
            

                Sign In
              
            </Link>
          </li>}
        
      </ul>
    </nav>
  )
}


interface Iprops {
  children: React.ReactNode;
  session?: any;
}

export default function AuthLayout({ children, session }: Iprops) {
  return (
    <SessionProvider session={session}>
      <>
        <Navbar />
        <div>{children}</div>
      </>
    </SessionProvider>
  )
}
