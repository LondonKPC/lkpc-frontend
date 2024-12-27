import React from "react";
import Home from "./home/page";
import NavBar from "./components/NavBar";

export default function Main(): React.ReactNode {
  return (
    <main className="h-full">
      <Home />
    </main>
  );
}