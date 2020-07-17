import React, { useState } from 'react';
import { NavbarLink } from "@perfolio/components"


export const Index = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const linkStyle =
    'text-gray-700 font-medium hover:text-black transition duration-150 ease-in-out text-lg';

  return (
    <div className="h-screen bg-gray-100">
      <div className="relative overflow-hidden bg-gray-100">
        <div className="mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <nav role="navigation" className="p-8">
              <div className="container flex flex-wrap items-center justify-between mx-auto md:flex-no-wrap">
                <a href="#" rel="home" className="text-xl font-semibold">
                  <span className="text-gray-800">PERFOLIO</span>
                  <span className="text-primary-500">RESEARCH</span>
                </a>

                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-gray-400 hover:text-gray-900 focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      {open ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        )}
                    </svg>
                  </button>
                </div>
                <div
                  className={`${
                    open ? '' : 'hidden'
                    } w-full md:w-auto md:flex md:items-center justify-between ml-4 md:ml-0`}
                >
                  <ul className="flex flex-col pt-4 mt-4 -mx-4 space-y-4 border-t md:space-x-2 md:space-y-0 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0 md:space-x-16">
                    <NavbarLink label="Product"></NavbarLink>
                    <NavbarLink label="Features"></NavbarLink>
                    <NavbarLink label="About us"></NavbarLink>

                  </ul>
                </div>
                <div
                  className={`${
                    open ? '' : 'hidden'
                    } w-full md:w-auto md:flex md:items-center justify-between ml-4 md:ml-0`}
                >
                  <ul className="flex flex-col pt-4 mt-4 -mx-4 space-y-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0 md:space-y-0 md:space-x-4">
                    <li>
                      <a className={linkStyle} href="trade">
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="flex flex-col items-center justify-center mx-auto space-y-12 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 md:text-center xl:text-5xl sm:leading-none md:text-6xl">
                  <span className="text-primary-600">Factor returns </span>
                  <br className="xl:hidden"></br>
                  to enrich your research
                </h2>
                <p className="mt-3 text-gray-500 md:text-center sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
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
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
