import React from "react";
import Image from "next/image";
import UrgentcareData from "./UrgentcareData";
type Props = {};

const Urgentcare = (props: Props) => {
  return (
    <div style={{ marginTop: "100px" }} className="pb-5">
      <div className="bg-gray-100 px-2 py-10 dark:bg-slate-900">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-slate-900   dark:text-white md:text-4xl">
            Urgent Care
          </h2>{" "}
          <p className=" mt-4 text-primary-500 text-center lg:text-xl sm:text-sm  leading-7">
          During regular office hours, contact your primary care physician's office to see if you can get a same day appointment. We are also contracted with the following Urgent Cares for your convenience
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-2  text-slate-700 md:grid-cols-3">
            {UrgentcareData.map((care , i )=>{
              return(
                <li className="rounded-xl  px-6 py-8 shadow  bg-slate-50 dark:bg-slate-800" key={i}>
                <div className="flex items-center justify-center ">
                <span className="block dark:hidden"> {care.iconSvg}</span>
                <span className="hidden dark:block "> {care.iconDark}</span>
                </div>
                <div className="flex items-center justify-center">
                  <h3 className=" my-3 font-bold lg:text-xl text-lime-600  dark:text-cyan-600  ">
                    {care.clinic}
                  </h3>
                </div>
                <div className="flex items-center justify-center">
                  {" "}
                  <p className="text-secondary-500 mt-1.5 text-sm leading-6  lg:text-xl dark:text-white">
                  {care.address} <br />
                  {care.phone}<br />
                  {care.fax}<br />
                  </p>
                </div>
              
            
                  <p className="text-lime-600  dark:text-cyan-600  lg:text-xl font-bold mt-2 mb-2  ">Hours of Operation:</p>
               
  
                <div>
                  <p className="text-secondary-500 mt-1.5 text-sm leading-6 lg:text-xl dark:text-white">
                  {care.hours1}
                  </p>
                </div>
                <div className="flex items-left align-left">
                  <p className="text-secondary-500 mt-1.5 text-sm leading-6 lg:text-xl dark:text-white">
                  {care.hours2}
                  </p>
                </div>
  
                <div className="flex items-left align-left ">
                  <p className="text-secondary-500 mt-1.5 text-sm leading-6 lg:text-xl dark:text-white">
                  {care.hours3}
                  </p>
                </div>
              </li>
              )
            })}
           

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Urgentcare;
