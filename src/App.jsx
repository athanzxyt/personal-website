import React from "react"

import Header from "./Header"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-lg space-y-8 p-4">
        <Header />
        <Navbar />
      </div>
    </div>
  )
}

export default App
