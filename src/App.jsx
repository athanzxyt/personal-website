import React from "react"

import Header from "./containers/Header"
import Navbar from "./containers/Navbar"
import ContentPanel from "./containers/ContentPanel"
import Footer from "./containers/Footer"

function App() {
  return (
    <div className="flex justify-center bg-tertiary">
      <div className="w-full max-w-screen-lg space-y-8 p-4">
        <Header />
        <section className="w-full border-b-2"/>
        <Navbar />
        <ContentPanel />
        <Footer />
      </div>
    </div>
  )
}

export default App
