import React from "react"
import { Code } from "@perfolio/components"
/* eslint-disable-next-line */
export interface HeroSectionProps {
  color: string
  headline: {
    regular: string
    highlight: string
  }
  paragraph: string
  primaryButton: {
    label: string
    href: string
  }
  secondaryButton?: {
    label: string
    href: string
  }
}

export const HeroSection = (props: HeroSectionProps) => {
  const toText = (weight: number): string => {
    return "text-" + props.color + "-" + weight
  }

  const toBg = (weight: number): string => {
    return "bg-" + props.color + "-" + weight
  }

  const toBorder = (weight: number): string => {
    return "border-" + props.color + "-" + weight
  }


  return (
    <main className="flex items-center px-4 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">

      <div className="flex flex-col items-center w-full">
        <div className="space-y-4 text-left sm:text-center md:space-y-8 xl:space-y-12 lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 xl:text-5xl sm:leading-none md:text-5xl">
            {props.headline.regular}
            <br className="xl:hidden"></br>
            <span className={toText(600)}> {props.headline.highlight}</span>
          </h2>
          <p className="text-gray-700 sm:text-lg sm:mx-auto md:text-xl lg:mx-0">{props.paragraph}</p>

          <div className="space-y-4 md:space-x-4 md:space-y-0">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={props.primaryButton.href}
                  className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out ${toBg(600)} border border-transparent rounded-md hover:${toBg(500)} focus:outline-none focus:${toBorder(700)} md:py-4 md:text-lg md:px-10`}
                >
                  {props.primaryButton.label}
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href={props.secondaryButton.label}
                  className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 ${toText(700)} transition duration-150 ease-in-out${toBg(100)} border border-transparent rounded-md hover:${toText(600)} hover:${toBg(100)} focus:outline-none  focus:${toBorder(300)} md:py-4 md:text-lg md:px-10`}
                >
                  {props.secondaryButton.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 bg-gray-400 border border-red-500">
        <Code language="python"
        >{[
          "r = requests.get('https://api.github.com/user', auth = ('user', 'pass'))",
          "r.json()",
          "private_gists': 419, 'total_private_repos': 77, ..."
        ].join("\n")}</Code>
      </div>
    </main>
  )
}
export default HeroSection
