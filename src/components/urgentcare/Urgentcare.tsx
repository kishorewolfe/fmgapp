import React from "react";
import Image from "next/image";
import UrgentcareData from "./UrgentcareData";
import { Metadata } from "next";
type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const Urgentcare = (props: Props) => {
  return (
    <div style={{ marginTop: "100px" }} className="pb-5">
      <div className="bg-gray-100 px-2 py-10 dark:bg-slate-900">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-slate-900   dark:text-white md:text-4xl">
            Urgent Care
          </h2>{" "}
          <p className=" text-primary-500 mt-4 text-center leading-7 sm:text-sm  lg:text-xl">
            During regular office hours, contact your primary care
            physician&apos;s office to see if you can get a same day
            appointment. We are also contracted with the following Urgent Cares
            for your convenience
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-3 mb-5  text-slate-700 md:grid-cols-3">
            {UrgentcareData.map((care, i) => {
              return (
                <li
                  className="rounded-xl  bg-slate-50 px-6 py-8  mb-2 shadow dark:bg-slate-800"
                  key={i}
                >
                  <div className="flex  ">
                    <span className="block dark:hidden"> {care.iconSvg}</span>
                    <span className="hidden dark:block "> {care.iconDark}</span>
                  </div>
                  <div className="flex ">
                    <h3 className=" my-3 font-bold text-lime-600 dark:text-cyan-600  lg:text-xl  ">
                      {care.clinic}
                    </h3>
                  </div>
                  <div className="flex ">
                    {" "}
                    <p className="text-secondary-500 mt-1.5 text-sm leading-6  dark:text-white lg:text-lg">
                      {care.address} <br />
                      {care.address_line2} <br />
                      {care.phone}
                      <br />
                      {care.fax}
                      <br />
                    </p>
                  </div>

                  <p className="mb-2  mt-2  font-bold text-lime-600 dark:text-cyan-600 lg:text-xl  ">
                    Hours of Operation:
                  </p>

                  <div>
                    <p className="text-secondary-500 mt-1.5 text-sm leading-6 dark:text-white lg:text-lg">
                      {care.hours1}
                    </p>
                  </div>
                  <div className="items-left align-left flex">
                    <p className="text-secondary-500 mt-1.5 text-sm leading-6 dark:text-white lg:text-lg">
                      {care.hours2}
                    </p>
                  </div>

                  <div className="items-left align-left flex ">
                    <p className="text-secondary-500 mt-1.5 text-sm leading-6 dark:text-white lg:text-lg">
                      {care.hours3}
                    </p>
                  </div>

                  {care.HolidayHours && <>
                  
                  <p className="mb-2  mt-2  font-bold text-lime-600 dark:text-cyan-600 lg:text-lg  ">
                    Holiday Hours:
                  </p>
                  <div className="items-left align-left flex ">
                    <p className="text-secondary-500 mt-1.5 text-sm leading-6 dark:text-white lg:text-lg">
                      {care.HolidayHours}
                      <br/>
                      {care.All_Other_Holidays}
                    </p>
                  </div>
                  
                  </>}
                  


                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Urgentcare;
