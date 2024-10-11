import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};

const InsurancePagePlans = (props: Props) => {
  return (

   

      <div
        className="mt-[200px]  bg-slate-50 p-4 dark:bg-slate-800"
        style={{ marginTop: "200px" }}
      >
        <div className="mx-auto h-max max-w-7xl px-6 md:px-12 xl:px-6">
          <h6 className="md:text-md mt-2 font-black leading-10 tracking-wide text-gray-800 dark:text-white sm:text-sm  md:text-md lg:text-lg xl:text-4xl">
            My Family Medical Group treats individuals{" "}
            <span className="text-lime-600 dark:text-lime-600">
              who are assigned to any of the following Health Plans:{" "}
            </span>
          </h6>

          <section>
        <div className="mx-auto max-w-screen-3xl p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="overflow-hidden rounded shadow-lg">
              <div className="relative">
                <div className="group relative flex items-center justify-center p-8 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                  <Image
                    src={"/images/insurance/blue.png"}
                    alt="Image"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded shadow-lg">
              <div className="relative">
                <div className="group relative flex items-center justify-center p-8 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                  <Image
                    src={"/images/insurance/healthnet.png"}
                    alt="Image"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded shadow-lg">
              <div className="relative">
                <div className="group relative flex items-center justify-center p-8 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                  <Image
                    src={"/images/insurance/scan.png"}
                    alt="Image"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
              <div className="relative">
                <div className="group relative flex items-center justify-center p-8 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 dark:bg-gray-800">
                  <Image
                    src={"/images/insurance/united.png"}
                    alt="Image"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          <div className="py-4 text-justify">
            <h3 className="font-manrope mb-4  font-bold text-gray-900 sm:text-sm  md:text-md lg:text-lg xl:text-2xl ">
              My Family Medical Group also treats individuals that have Original
              Medicare coverage that includes Medicare Part A (Hospital
              Insurance) and Medicare Part B (Medical Insurance).
            </h3>
          </div>
        </div>
      </div>
  );
};

export default InsurancePagePlans;
