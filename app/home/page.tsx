import React from 'react'
import capy from "@/images/capy.png";

function Home() {
  return (
    <div className="h-full">
      <div className="flex h-full">
        <div className="w-1/2 bg-slate-700 float-left text-center">
            Home...
        </div>
        <img src={capy.src} alt="capybara" className="text-black w-1/2 float-right"></img>
      </div>
    </div>
  )
}

export default Home