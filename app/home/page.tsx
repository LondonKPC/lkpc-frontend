import React from 'react'
import capy from "@/images/capy.png";
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className="h-full">

      <div className="flex h-full">
        <div className="w-1/2 bg-slate-700 float-left text-center opacity-90 hover:opacity-100">
            Home...
        </div>

        <img src={capy.src} alt="capybara" className="text-black w-1/2 float-right opacity-70 hover:opacity-80"></img>
      </div>
      <Footer />
    </div>
  )
}

export default Home