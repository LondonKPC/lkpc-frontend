import React from 'react';
import capy from "@/images/capy.png";
import Footer from '@/components/Footer';

function Home() {
  return (
    <div className="h-screen w-full overflow-x-hidden flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/2 bg-slate-700 text-center opacity-90 hover:opacity-100 flex items-center justify-center">
          Home...
        </div>
        <div className="w-1/2">
          <img
            src={capy.src}
            alt="capybara"
            className="h-full w-full object-cover opacity-70 hover:opacity-80"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
