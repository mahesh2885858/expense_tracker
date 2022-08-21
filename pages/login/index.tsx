import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Header from '../../components/Header'
import Link from "next/link"
const Login: NextPageWithLayout = () => {
    const LoginUser = (e: React.FormEvent) => {
        e.preventDefault()
        alert("the form is submitted")
    }
    return (
        <div className='h-[calc(100vh-80px)] flex items-center'>

            <div className='w-full   flex justify-center mt-4'>
                <div className='md:w-[45%] w-[85%] bg-slate-400 rounded-lg p-4 gap-2 flex justify-center items-center flex-col'>
                    <div className='w-full flex justify-center p-4'>
                        <h2 className='font-bold text-2xl'>Login</h2>

                    </div>
                    <form noValidate onSubmit={LoginUser} className="w-[85%] flex justify-center gap-5 flex-col">
                        <div className='w-full'>
                            <label htmlFor="email" className='text-xl'>Email:</label>
                            <input type="email" name="email" id="email" placeholder='Email' className='w-full rounded-md mt-2 focus:ring outline-none p-2 text-xl' />

                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className='text-xl'>Password:</label>
                            <input type="password" name="password" id="password" placeholder='Password' className='w-full rounded-md mt-2 focus:ring outline-none p-2 text-xl' />

                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='p-2 bg-blue-500 rounded-md text-white'>Login</button>
                        </div>
                    </form>
                    <div className='w-full flex justify-center'>
                        <span>Don't have an account create an account </span>
                        <span className='ml-1 text-white'><Link href="/register">
                            <a >Here</a>
                        </Link></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
Login.getLayout = (page: ReactElement) => {
    return (
        <Header>{page}</Header>
    )

}

export default Login