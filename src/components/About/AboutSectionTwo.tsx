"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
         
<div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/healthcare2.jpg"
                alt="about-image"
                width={500}
                height={60}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/healthcare2.jpg"
                alt="about-image"
                width={500}
                height={60}
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          
            
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">

              <p className="relative mb-6 text-3xl font-bold text-lime-600 dark:text-white xl:text-hero">
              Specialist Providers</p>
                <p className=" font-medium   leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We have an extensive network of Specialists ready to meet all your healthcare needs.
                </p>
              </div>
              <div className="mb-9">
                <p className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We work with other medical experts if necessary and coordinate your care to specialist providers.
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
