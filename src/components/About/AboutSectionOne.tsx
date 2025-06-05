"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import { aboutDataOne } from "./AbouseSectionOneData";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-large text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );




  return (
    <section id="about" className="md:pt-18 pt-10 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <h1 className="xl:text-hero relative mb-6 text-3xl font-bold text-lime-600 dark:text-white">
                Why Us!
              </h1>
              <div className="w-full bg-cyan-700 py-4 px-4 text-center mb-6">
  <h3 className="text-white text-2xl sm:text-2xl md:text-2xl font-semibold tracking-tight">
    Comprehensive Healthcare, All in One Convenient Location!
  </h3>
</div>

              {aboutDataOne.map((about , i)=>{
                return(
                  <div
                  className="mb-16 pb-4 max-w-[670px] lg:mb-0"
                  data-wow-delay=".15s"
                  key={i}
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-1 ">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <h2 className="text-xl font-bold text-cyan-600 dark:text-white">
                           {about.number_badge}
                          </h2>
                        </div>
  
                        <div className="w-full">
                          <h3 className="text-xl font-semibold dark:text-white sm:text-2xl">
                          {about.about_heading_1}                          </h3>
                          <p className="mt-2 text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                          {about.about_sub_heading_1}
                          </p>
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
                )
              })}

            
            </div>
<div className="w-full px-4 lg:w-1/2">
  <div className="relative mx-auto max-w-[500px] lg:mr-0" style={{ height: 620 }}>
    <Image
      src="/images/about/healthcare1.jpg"
      alt="about-image"
      fill
      className="rounded-md drop-shadow-three dark:hidden dark:drop-shadow-none object-cover"
      sizes="(max-width: 768px) 100vw, 500px"
      priority
    />
    <Image
      src="/images/about/healthcare1.jpg"
      alt="about-image"
      fill
      className="rounded-md hidden drop-shadow-three dark:block dark:drop-shadow-none object-cover"
      sizes="(max-width: 768px) 100vw, 500px"
      priority
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
