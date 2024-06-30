import React from "react"

import Header from "./containers/Header"
import Navbar from "./containers/Navbar"
import ContentPanel from "./containers/ContentPanel"

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
