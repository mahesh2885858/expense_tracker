import Link from 'next/link'
import React from 'react'

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='w-full bg-slate-300 flex items-center p-3 justify-between '>
                <div className='bg-red p-3 cursor-pointer'>
                    <h1 className='text-2xl text-green-600 font-bold'>
                        ETracker
                    </h1>
                </div>
                <div className='md:mr-5 text-xl font-thin mr-2 flex gap-4 items-center'>
                    <Link href="/login">
                        <a >Login</a>
                    </Link>
                    <Link href="/register">
                        <a >Sign-up</a>
                    </Link>
                </div>


            </div>
            {children}
        </>
    )
}

export default Header