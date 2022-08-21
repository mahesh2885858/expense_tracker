import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Link from 'next/link'

const Home: NextPage = () => {
  const isLoggedIn = false
  return (
    <div className=' w-screen h-screen bg-slate-200 antialiased scroll-smooth'>

      <Link href="/login">

        <a >Login</a>
      </Link>
      <Link href="/register">

        <a >Register</a>
      </Link>

    </div>
  )
}

export default Home
