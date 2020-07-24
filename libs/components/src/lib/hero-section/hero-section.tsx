import React from "react"

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
  return (
    <main className="px-4 mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="flex flex-col items-center w-full">
        <div className="space-y-4 text-left sm:text-center md:space-y-8 xl:space-y-12 lg:text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 xl:text-5xl sm:leading-none md:text-5xl">
            {props.headline.regular}
            <br className="xl:hidden"></br>
            <span className={`text-${props.color}-600`}> {props.headline.highlight}</span>
          </h2>
          <p className="text-gray-700 sm:text-lg sm:mx-auto md:text-xl lg:mx-0">{props.paragraph}</p>

          <div className="space-y-4 md:space-x-4 md:space-y-0">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={props.primaryButton.href}
                  className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-${props.color}-600 border border-transparent rounded-md hover:bg-${props.color}-500 focus:outline-none focus:border-${props.color}-700 focus:shadow-outline-${props.color} md:py-4 md:text-lg md:px-10`}
                >
                  {props.primaryButton.label}
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href={props.secondaryButton.label}
                  className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-${props.color}-700 transition duration-150 ease-in-out bg-${props.color}-100 border border-transparent rounded-md hover:text-${props.color}-600 hover:bg-${props.color}-50 focus:outline-none focus:shadow-outline-${props.color} focus:border-${props.color}-300 md:py-4 md:text-lg md:px-10`}
                >
                  {props.secondaryButton.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default HeroSection
