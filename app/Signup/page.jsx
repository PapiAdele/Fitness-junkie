'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert ('Password do not match!');
            return;
        }

        console.log('Sign up with:', {e,ail, password});
    };

    return(

        <>
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-[url('/Junkie.jpg')] bg-cover w-full h-screen z-0">
            </div>
            <div className="  min-h-screen flex  flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md mb-8 relative z-10 ">
                    <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

                    <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 mb-3 border rounded "
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 mb-3 border rounded "
                    />

                    <input
                    type="password"
                    placeholder="Confirm Password"
                    value={email}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full p-2 mb-3 border rounded "
                    />
                
                    <Button type="submit" className="w-full bg-blue-700"> Create Account</Button>

                    <div className=" flex flex-col items-center justify-center">
                        <h1 className="text-xl font-semibold">Already have an accout?</h1>
                        <Link href="/Login" className="text-2xl font-bold"><Button className=" bg-blue-700">Login</Button></Link>
                    </div>

                    
                </form>
                
            </div>
        </div>
        </>
    )
}