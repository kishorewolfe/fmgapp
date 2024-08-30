import React from "react";
import UMcaresData from "./UMCaresData";
type Props = {};

const UMcaresList = (props: Props) => {
  return (
    <div>
      <div className="  -mx-2  flex max-w-6xl flex-col flex-wrap p-4 sm:mx-auto sm:mb-2 lg:w-4/5 lg:px-10">
        {UMcaresData?.map((um ,i)=>{
            return(
                <div className="w-full p-2  lg:px-5" key={i}>
          <div className="flex h-full items-center rounded bg-gray-100 dark:bg-slate-800 p-4">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              className="mr-4 h-6 w-6 flex-shrink-0 text-lime-500"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="font-medium">{um?.care}</span>
          </div>
        </div>
     

            )
        })}
        </div>
    </div>
  );
};

export default UMcaresList;
