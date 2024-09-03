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
