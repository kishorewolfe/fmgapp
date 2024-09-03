import HolidayHours from "@/components/HolidayHours";
import HolidayData from "@/components/HolidayHours/HolidayData";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const page = (props: Props) => {
  return (
    <div className="mb-10 mt-40 bg-slate-50 dark:bg-gray-900">
      <div className="justify-center text-center">
        <h1 className=" my-10 text-7xl font-bold tracking-tight text-gray-800 dark:text-gray-100 md:text-5xl">
          Holiday Hours
        </h1>
      </div>

      {HolidayData.map((feature) => (
        <HolidayHours key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default page;
