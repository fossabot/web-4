import React from "react"
import { Chart, ChartProps } from "./chart"

export default {
  component: Chart,
  title: "Chart",
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ChartProps = {
    data: [
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 },
    ],
  }

  return <Chart data={props.data} className="w-full h-40" />
}
