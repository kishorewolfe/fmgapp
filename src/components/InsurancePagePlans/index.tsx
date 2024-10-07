import Image from "next/image";
import React from "react";

type Props = {};

const InsurancePagePlans = (props: Props) => {
  return (
    <div>
      <section
        className="cover bg-blue-teal-gradient relative flex min-h-screen items-center overflow-hidden bg-cyan-600 px-4 py-48 sm:px-8 lg:px-16
      xl:px-40 2xl:px-64"
      >
        <div className="headerimg absolute left-0 top-0 z-0 h-full w-full ">
          <Image
            src="/images/insurance/30.jpg"
            alt=""
            width={1080}
            height={1920}
            objectFit="contain"
            className=" w-full object-fill opacity-20"
          />
        </div>

        <div className="h-100 relative z-10 lg:mt-16 lg:w-3/4 xl:w-2/4">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Health Plans{" "}
            </h1>
          </div>
        </div>
      </section>
   

      <div
        className="min-h-screen  bg-slate-50 p-4 dark:bg-slate-800"
        style={{ marginTop: "100px" }}
      >
        <div className="mx-auto h-max max-w-7xl px-6 md:px-12 xl:px-6">
          <h6 className="md:text-md mt-2 font-black leading-10 tracking-wide text-gray-800 dark:text-white sm:text-sm lg:text-lg xl:text-4xl">
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
            <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
              My Family Medical Group also treats individuals that have Original
              Medicare coverage that includes Medicare Part A (Hospital
              Insurance) and Medicare Part B (Medical Insurance).
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePagePlans;
