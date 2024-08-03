import React from "react";
import Image from "next/image";
type Props = {};
import NurseData from "./NurseData";
const NurseService = (props: Props) => {
  return (
    <div >
      <header className=" container  h-full items-center px-1 lg:mt-0  bg-slate-100 lg:flex dark:bg-slate-900">
        <div className="w-full">
          <h1 className="text-4xl font-bold lg:text-6xl">
            <span className="text-lime-600">Nurse</span>{" "}
            <span className="text-cyan-600">Advice Lines</span>
          </h1>
          <div className="my-4 h-2 w-20 bg-green-700"></div>
          <p className="mb-10 text-xl">
            In case you are experiencing symptoms that are not life-threatening
            and are unable to reach your doctor,<br/> you may call your Health Plan’s
            Nurse advice line. All advice lines are open 24 hours / 7 days a
            week.
          </p>
        </div>
      </header>

      <div className=" grid w-full max-w-4xl gap-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 bg-slate-100 dark:bg-slate-900 ">
        {NurseData.map((nurse , i) => {
          return (
            <div className="flex items-center rounded bg-white p-2 m-4 shadow-lg dark:bg-slate-800" key={i} >
              <div className="flex h-14 w-12 flex-shrink-0 items-center justify-center rounded border-black">
                <Image src={nurse?.image} alt="IMAGE" width={250} height={250}></Image>
              </div>
              <div className="ml-4 flex flex-grow flex-col">
                <span className="text-xl font-bold">{nurse.phNumber}</span>
                <div className="flex items-center justify-between">
                  <span className="text-lime-600">{nurse.name}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="flex items-center p-4 bg-white rounded shadow-lg">
            <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
                <svg className="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd" />
                </svg>
            </div>
            <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold">{NurseData[1].phNumber}</span>
                <div className="flex items-center justify-between">
                    <span className="text-lime-600">{NurseData[1].name}</span>
                    <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                </div>
            </div>
        </div>

        <div className="flex items-center p-4 bg-white rounded shadow-lg">
            <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                </svg>
            </div>
            <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold">{NurseData[2].phNumber}</span>
                <div className="flex items-center justify-between">
                    <span className="text-lime-600">{NurseData[2].name}</span>
                    <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default NurseService;
