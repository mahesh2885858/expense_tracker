import React, { ReactElement, useState } from 'react'
import Link from "next/link"
import type { NextPageWithLayout } from '../_app'
import Header from '../../components/Header'
import FormValidate from '../../helpers/FormValidate'
const Register: NextPageWithLayout = () => {

    const [inputs, setInputs] = useState({
        inputs: {
            name: "",
            email: "",
            password: "",
            cpassword: ""
        },
        errors: {
            name: "",
            email: "",
            password: "",
            cpassword: ""
        },

    })
    const OnUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs, [e.target.name]: e.target.value
                },
                errors: {
                    ...prevState.errors, [e.target.name]: ""
                }
            }
        })
    }
    const RegisterUser = async (e: React.FormEvent) => {

        const { cpassword, email, name, password } = inputs.inputs
        e.preventDefault()
        const result = FormValidate({ cpassword, email, name, password }, 3, 8)
        if (result.errorField === null) {
            try {
                const data = await fetch("/api/Users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, password })
                })
                console.log(await data.json())
            } catch (err: any) {
                console.log(err.message)
            }
        } else {
            setInputs((prev) => {
                return {
                    ...prev,
                    errors: {
                        ...prev.errors,
                        [result.errorField!]: result.errorMessage
                    }
                }
            })
        }

    }
    return (
        <div className='h-[calc(100vh-80px)] flex items-center'>

            <div className='w-full   flex justify-center mt-4'>
                <div className='md:w-[45%] w-[85%] bg-slate-400 rounded-lg p-4 gap-2 flex justify-center items-center flex-col'>
                    <div className='w-full flex justify-center'>
                        <h2 className='font-bold text-2xl'>Register</h2>

                    </div>
                    <form noValidate onSubmit={RegisterUser} className="w-[85%] flex justify-center gap-3 flex-col">
                        <div className='w-full'>
                            <label htmlFor="name" className='text-xl'>Name:</label>
                            <input value={inputs.inputs.name} onChange={OnUserInput} type="name" name="name" id="name" placeholder='Name' className='w-full rounded-md mt-2 focus:ring outline-none p-2 text-xl' />
                            {inputs.errors.name && <p className='text-red-500 text-sm'>{inputs.errors.name}</p>}

                        </div>


                        <div className='w-full'>
                            <label htmlFor="email"
                                className='text-xl'>Email:</label>
                            <input
                                value={inputs.inputs.email} onChange={OnUserInput}

                                type="email" name="email" id="email" placeholder='Email' className='w-full rounded-md mt-2 focus:ring outline-none p-2 text-xl' />
                            {inputs.errors.email && <p className='text-red-500 text-sm'>{inputs.errors.email}</p>}


                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className='text-xl'>Password:</label>
                            <input
                                value={inputs.inputs.password} onChange={OnUserInput}

                                type="password" name="password" id="password" placeholder='Password' className='w-full rounded-md mt-2 focus:ring outline-none p-2 text-xl' />
                            {inputs.errors.password && <p className='text-red-500 text-sm'>{inputs.errors.password}</p>}


                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className='text-xl'>Confirm Password:</label>
                            <input

                                value={inputs.inputs.cpassword} onChange={OnUserInput}

                                type="password" name="cpassword" id="cassword" placeholder='Confirm Password' className='w-full rounded-md mt-2 focus:ring outline-none p-2 text-xl' />
                            {inputs.errors.cpassword && <p className='text-red-500 text-sm'>{inputs.errors.cpassword}</p>}

                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='p-2 bg-blue-500 rounded-md text-white'>Register</button>
                        </div>
                    </form>
                    <div className='w-full flex justify-center'>
                        <span>Already have an account Login</span>
                        <span className='ml-1 text-white'><Link href="/login">
                            <a >Here</a>
                        </Link></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
Register.getLayout = (page: ReactElement) => {
    return (
        <Header>{page}</Header>
    )

}
export default Register