import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const UMCaresHeroTwo = (props: Props) => {
  return (
    <>
      <div className=" mb-2 mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center gap-x-10 gap-y-10 px-7 py-10 dark:bg-gray-800 lg:flex-row lg:px-10 lg:py-14">
        <div className="hero-image relative isolate z-10 mt-4 w-full rounded-3xl md:px-5 md:pt-2 lg:w-1/2 lg:px-0 lg:pt-0">
          <Image
            className="ml-8 mt-2 rounded-3xl"
            src="/images/umcares/apollo.png"
            alt="UM Criteria "
            height={300}
            width={300}
          />
        </div>
        <div className="flex flex-col gap-y-5 lg:w-[650px] lg:px-5">
          <h1 className=" text-4xl font-semibold leading-[1.2] text-lime-600 dark:text-white md:mx-auto md:max-w-xl md:text-center md:text-5xl lg:mx-0 lg:max-w-full lg:text-left xl:text-[50px]">
          Apollo Managed Care
          </h1>
          <div className="text-sm dark:text-gray-300 md:mx-auto md:max-w-xl md:text-center lg:mx-0 lg:max-w-full lg:text-left">
            <ul>
              <li className="flex items-center dark:text-white">
                <svg
                  className="mr-2 h-10 w-10 text-lime-600 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="md:text-md sm:text:sm mt-5 justify-normal lg:text-lg">
                  {" "}
                  Apollo Medical Review Criteria Guidelines for Managing Care The affordable solution for evidence-based clinical decision suppor
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-x-5 gap-y-2.5 lg:flex-row">
            <Link href={"https://mfmg.apollomanagedcare.com/"} className="lg:ml-8 sm:ml-1 flex w-full items-center justify-center rounded-lg border border-lime-600 bg-lime-600/10 px-6 py-2.5 font-semibold text-cyan-600 transition duration-200 hover:shadow-lg hover:drop-shadow dark:border-gray-500/50 dark:bg-transparent dark:text-white lg:w-fit">
              <span>
                Link here to Visit to Apollo Managed Care
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UMCaresHeroTwo;
