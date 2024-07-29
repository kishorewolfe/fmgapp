"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion"
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-10 md:pt-18 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
          
               <h1 className="relative mb-6 text-3xl font-bold text-lime-600 dark:text-white xl:text-hero">
               Why Us!</h1>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-1 ">
               
     

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-25 w-25 ">
                  <p className="lg:text-metatitle2 sm:text-sm font-semibold text-cyan-600 dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="
                 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed
                  ">
                  Complete Healthcare In One Convenient Location!
                  </h3>
                  {/* <p>Ut ultricies lacus non fermentum ultrices.</p> */}
                </div>
              </div>
              <div className="mt-7 flex items-center gap-5 ">
                <div className="flex h-15 w-15 items-center justify-center ">
                  <p className="text-metatitle2 font-semibold text-cyan-600 dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We Will Help YOU Manage Your Healthcare By Encouraging You To Play An Active Part In Your Own Healthcare.
                  </h3>
                  {/* <p>consectetur adipiscing elit fermentum ultricies.</p> */}
                </div>
              </div>

              <div className="mt-7  flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center ">
                  <p className="text-metatitle2 font-semibold text-cyan-600 dark:text-white">
                    03
                  </p>
                </div>

                <div className="w-3/4">
                  <h3 className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We Provide You With Educational Materials Regarding Your Health.

                  </h3>
                  {/* <p>consectetur adipiscing elit fermentum ultricies.</p> */}
                </div>
              </div>

              <div className="mt-7  flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center">
                  <p className="text-metatitle2 font-semibold text-cyan-600 dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We Work With Other Medical Experts If Necessary And Coordinate Your Care To Specialist Providers.
                  </h3>
                  {/* <p>consectetur adipiscing elit fermentum ultricies.</p> */}
                </div>
              </div>
           
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
              
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
             
                <Image
                  src="/images/about/healthcare1.jpg"
                  alt="about-image"
                  width={500}
                  height={60}
                
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/healthcare1.jpg"
                  alt="about-image"
                  width={500}
                  height={60}
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
