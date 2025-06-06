'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Login with:', {email, password})

    }
    return (

        <>

        <div className="max-w-6xl mx-auto py-0 px-3 mb-2 ">
            <div className="flex mt-2">
                <div className="bg-[url('/Arms.jpg')] bg-cover w-6xl h-screen">
                </div>
                <div className=" ml-6 max-w-6xl flex  flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-black">Start your fitness journey here</h1>
                    <p className="text-xl font-serif">Your ultimate fitness partner to help you stay fit and health with personalized workout plans. </p>

                    <form onSubmit = {handleSubmit} className="bg-white p-6 rounded shadow-md w-full mt-4 max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mb-3 border rounded"
                        />

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mb-3 border rounded"
                        />
                    <Button type="submit" className=" w-full bg-blue-700">Login</Button>
                    </form>

                   
                    <div className=" flex flex-col items-center justify-center mt-4">
                        <h1 className="text-xl font-semibold">Don't have an accout?</h1>
                        <Link href="/Signup" className="text-2xl font-bold"><Button className=" bg-blue-700">Create Account</Button></Link>
                    </div>
                </div>
            </div>
                

        </div>
        </>


    )
}
