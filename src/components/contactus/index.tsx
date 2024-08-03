import React from "react";
import Image from "next/image";
type Props = {};

const Contactus = (props: Props) => {
  return (
    <div>
    

      <div>
        <div className="flex flex-wrap">
          <div className="mb-10 w-full sm:w-8/12">
            <div className="container mx-auto h-full sm:p-10">
              <nav className="flex items-center justify-between px-4">
                <div></div>
              </nav>
              <header className="container mt-10 h-full items-center px-4 lg:mt-0 lg:flex">
              <div className="mx-auto max-w-screen-lg p-5">
        <div className="">
          <div className="bg-gray-900 p-10 text-white md:col-span-4">
            <p className="font-regular mt-4 text-sm uppercase leading-7">
              Contact
            </p>
            <h3 className="text-3xl font-extrabold leading-normal tracking-tight sm:text-4xl">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s.
            </p>

            <div className="mt-5 flex items-center">
             
              <span className="text-sm">
                House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
              </span>
            </div>
            <div className="mt-5 flex items-center">

              <span className="text-sm">+93 749 99 65 50</span>
            </div>
            <div className="mt-5 flex items-center">
              {/* <svg
                className="mr-2 h-6 text-indigo-600"
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300.988 300.988"
                style="enableBackground:new 0 0 300.988 300.988;"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
                S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
                s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"
                    ></path>
                    <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		"></polygon>
                  </g>
                </g>
              </svg> */}
              <span className="text-sm">24/7</span>
            </div>
          </div>
        </div>
      </div>
              </header>
            </div>
          </div>
          <section
            className="cover bg-blue-teal-gradient relative flex min-h-screen items-center overflow-hidden bg-cyan-600 py-48 sm:w-4/12 sm:px-8
      xl:px-40 2xl:px-64"
          >
            <div className="absolute left-0 top-0 z-0 h-full w-full headerimg">
              <Image
                src="/images/services/building.jpg"
                alt="Leafs"
                className="h-48 object-cover opacity-20  sm:h-screen"
                width={1080}
                height={1920}
                objectFit="contain"
              ></Image>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
