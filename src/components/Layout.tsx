import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto py-12 px-4 bg-amber-400">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
