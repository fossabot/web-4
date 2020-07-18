import React, { createRef, useEffect } from "react"
import { createChart } from "lightweight-charts"

/* eslint-disable-next-line */
export interface ChartProps {
  data: { time: string; value: number }[]
  className?: string
}

export const Chart = (props: ChartProps) => {
  const myref = createRef()
  useEffect(() => {
    const chart = createChart(myref.current)
    const lineSeries = chart.addLineSeries()
    lineSeries.setData(props.data)
  }, [props.data])

  return <div className={props.className} ref={myref} id="chart" />
}

export default Chart
