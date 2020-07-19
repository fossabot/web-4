import React, { useState, useEffect } from "react"
import { Chart } from "@perfolio/components"
export const Index = () => {
  const [chartData, setChartData] = useState([])
  useEffect(() => {
    import("../marketreturns").then((res) => {
      setChartData(
        res.data.map((e) => {
          return {
            time: e.date,
            value: e.MktRF,
          }
        }),
      )
    })
  }, [])

  return (
    <main className="relative mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="container flex flex-wrap w-full">
        <Chart data={chartData} className="absolute inset-0 w-full opacity-50"></Chart>
        <div className="relative z-10 flex flex-col items-center w-full text-center lg:flex-grow lg:pl-24 md:pl-16 md:items-start">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 xl:text-5xl sm:leading-none md:text-6xl">
            Enrich your research with
            <br className="xl:hidden"></br>
            <span className="text-primary-600"> Factor returns</span>
          </h2>
          <p className="mt-3 text-gray-500 md:text-left sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="flex flex-col items-center justify-center mt-5 space-y-8 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full px-8 py-3 font-medium leading-6 text-white transition duration-150 ease-in-out border rounded-md bg-primary-600 order-transparent hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="w-full px-8 py-3 font-medium leading-6 duration-150 ease-in-out border rounded-md text-primary-700 bg-primary-100 transitio border-transparnt hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:shadow-outline-primary focus:border-primary-300 md:py-4 md:text-lg md:px-10"
              >
                Do something
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Index
