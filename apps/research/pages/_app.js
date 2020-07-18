import App from "next/app"
import React from "react"
import "../../../css/tailwind.css"
import { Navbar } from "@perfolio/components"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="h-screen bg-gray-100">
        <div className="container mx-auto">
          <Navbar></Navbar>
          <Component {...pageProps} />
        </div>
      </div>
    )
  }
}

export default MyApp
