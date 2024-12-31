import React from 'react'

function Home() {
  return (
    <div className="h-full">
            <div className="flex justify-center items-center w-full h-full bg-cover md:bg-full bg-center" style={{ backgroundImage: `url(${churchBackground.src})` }}>
                {/* Desktop */}
                <div className="bg-white w-full h-full bg-opacity-50">
                  <div className="flex flex-col items-center justify-center my-52">
                    <h1 className="text-white text-4xl font-bold">Connect With Us</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2">
                      <HomeCard groupName="HI-C" groupDescription="Gr. 7-12"/>
                      <HomeCard groupName="CU" groupDescription="College &  University" />
                      <HomeCard groupName="Adults" groupDescription="Graduates+" />
                  </div>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default Home