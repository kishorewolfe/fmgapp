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
      </div>
    </div>
  );
};

export default NurseService;
