import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "../../../css/tailwind.css"
import { Navbar, Footer } from "@perfolio/components"

export default ({ Component, pageProps }: AppProps) => {
  const logo = (
    <div className="text-xl font-semibold">
      <span className="text-gray-800">PERFOLIO</span>
      <span className="text-primary-600">RESEARCH</span>
    </div>
  )

  return (
    <div>
      <Head>
        <title>Perfolio Core</title>
      </Head>
      <div className="h-screen bg-gray-100">
        <div className="container mx-auto">
          <Navbar logo={logo}></Navbar>
          <Component {...pageProps} />
        </div>
      </div>
      <Footer bgColor="bg-primary-700" primaryText="text-white" secondaryText="text-primary-100"></Footer>
    </div>
  )
}
