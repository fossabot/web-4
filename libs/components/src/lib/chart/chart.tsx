import React, { createRef, useEffect } from "react"
import dynamic from "next/dynamic"
export interface ChartProps {
  data: { time: string; value: number }[]
  className?: string
}

export const Chart = (props: ChartProps) => {
  const myref = createRef<HTMLDivElement>()
  let lightweightCharts

  useEffect(() => {
    lightweightCharts = require("lightweight-charts")
    const { createChart } = lightweightCharts
    const chart = createChart(myref.current)
    const lineSeries = chart.addLineSeries()
    lineSeries.setData(props.data)
  }, [props.data])

  return <div className={props.className} ref={myref} id="chart" />
}

export default Chart
