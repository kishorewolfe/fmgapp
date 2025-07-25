"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import data from "./DoctorFCPData.json"
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const Profiles = ({ doctorData }) => {
  return (
    <div>
      {doctorData.map((doctor) => {
        let docName =doctor?.FirstName + " " + doctor?.LastName + " " + doctor?.Degree1;
        return (
          <div
            key={doctor?.Id}
            className=" mx-auto mb-4  mt-2 overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-900 dark:text-white sm:md:max-w-sm md:max-w-4xl lg:w-[855px]"
          >
            <div className="p-2 pl-4 md:flex">
              <div className="md:shrink-0">
                <Image
                  alt="Doctor"
                  className=" rounded-xl  w-full object-cover sm:w-full sm:h-full md:h-full md:w-48"
                  src={doctor?.image_url}
                  height={"150"}
                  width={"180"}
                />
              </div>
              <div className="p-8">
                <div className="md:text-md sm:text-sm lg:text:lg text-lg font-semibold uppercase tracking-wide text-cyan-600">
                  {docName}
                </div>
                <a
                  href="#"
                  className="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-white"
                >
                  {doctor?.ContractedSpecialty}
                </a>
                <p className="mt-2 text-slate-500"> {doctor?.Practice_Name}</p>
                <br />
                <div className="pb-8 pt-6">
                  <Link
                    className="rounded-full bg-cyan-700 px-4 py-2 font-bold text-white hover:bg-lime-600"
                    href={`/find_doctor/${doctor?.Id}`}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profiles;
