import React from "react";

export default function Home(): React.ReactNode {
  return (
    <main>
      <div className="h-30 bg-slate-900">
        <p className="text-sky-400 text-center text-[100px]">Hello world</p>
      </div>

      <div>
        <button className="bg-black float-left m-16 w-40 h-20">
          Back
        </button>
        <button className="bg-black float-right m-16 w-40 h-20">
          Go
        </button>
      </div>
    </main>
  );
}
