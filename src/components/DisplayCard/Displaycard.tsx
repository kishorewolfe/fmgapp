import React from "react";
import DisplaycardData from "./DisplaycardData";
import Image from "next/image";
import Link from "next/link";
type Props = {};


 const Displaycard = (props: Props) => {
  return (
    <>
      <div>
        <div className="p-20 bg-white-700 ">
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="h-56 bg-gradient-to-br from-blue-700  to-purple-400 blur-[106px]"></div>
            <div className="h-32 bg-gradient-to-r from-cyan-400 to-indigo-600  blur-[106px]"></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6 align-middle justify-center">
            <div className="mt-12 text-gray-100 md:w-2/3 lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-secondary h-6 w-6"
              >
                <path
                 fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h2 className="my-8 text-2xl font-bold text-cyan-600 md:text-4xl">
              My Family Medical Group Services:
              </h2>
            </div>
            <div className=" drop-shadow-2xl mt-16 grid divide-x divide-y  divide-cyan-700 overflow-hidden  rounded-3xl border  text-gray-600 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-5">
              <div className="group relative bg-blueGray-200 hover:bg-cyan-600 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10 " >
              <Link href="/patient-services">
                <div className="relative space-y-8 p-8 py-12">
                 
                    {DisplaycardData[0]?.icon}
                  
                  <div className="space-y-2">
                    <h5 className="group-hover:text-secondary text-xl font-semibold text-black transition dark:text-white">
                    {DisplaycardData[0]?.name}
                    </h5>
                  
                  </div>
                </div>
                </Link>
              </div>

              <div className="group relative  hover: hover:bg-cyan-600 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <Link href="/urgentcare">
                <div className="relative space-y-8 p-8 py-12">
                {DisplaycardData[1]?.icon}
                  <div className="space-y-2">
                    <h5 className="group-hover:text-secondary text-xl font-semibold text-black transition dark:text-white">
                    {DisplaycardData[1]?.name}
                    </h5>
                  
                  </div>
                </div>
                </Link>
              </div>
            
              <div className="group relative  hover: hover:bg-cyan-600 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <Link href="/nurseadvice">
                <div className="relative space-y-8 p-8 py-12">
                {DisplaycardData[2]?.icon}
                  <div className="space-y-2">
                    <h5 className="group-hover:text-secondary text-xl font-semibold text-black transition dark:text-white">
                    {DisplaycardData[2]?.name}
                    </h5>
                  
                  </div>
                </div>
                </Link>
              </div>
              <div className="group relative  hover: hover:bg-cyan-600 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <Link href="/contactus">
                <div className="relative space-y-8 p-8 py-12">
                {DisplaycardData[3]?.icon}
                  <div className="space-y-2">
                    <h5 className="group-hover:text-secondary text-xl font-semibold text-black transition dark:text-white">
                    {DisplaycardData[3]?.name}
                    </h5>
                   
                  </div>
                </div>
                </Link>
              </div>
              <div className="group relative  hover: hover:bg-cyan-600 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <Link href="/fmgprivacypolicy">
                <div className="relative space-y-8 p-8 py-12">
                {DisplaycardData[4]?.icon}
                  <div className="space-y-2">
                    <h5 className="group-hover:text-secondary text-xl font-semibold text-black transition dark:text-white">
                    {DisplaycardData[4]?.name}
                    </h5>
                    
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Displaycard;