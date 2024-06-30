import React from "react"

import Header from "./Header"
import Navbar from "./Navbar"
import ContentPanel from "./ContentPanel"

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-lg space-y-8 p-4">
        <Header />
        <Navbar />
        <ContentPanel />
      </div>
    </div>
  )
}

export default App
