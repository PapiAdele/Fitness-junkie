

import Header from "@/components/header"
import FitApp from "@/components/fit-app"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home(){
  return (

  <div className="relative min-h-screen">
    <section className="absolute inset-0 bg-[url('/workout-pic.jpg')] bg-cover w-full h-screen filter blur-1xl z-0" aria-hidden="true">
    </section>
      <div className="min-h-screen bg-liner-to-br from-blue-50 via-white to-purple-50">
        <div className=" relative z-10 container mx-auto px-4 py-8 max-w-4xl">
          <Link href="/Login" className="text-2xl font-bold"><Button >Start your fitness journey</Button></Link>
          <Header />
          <FitApp />
        </div>
       
      </div>
  </div>
  )
}
   