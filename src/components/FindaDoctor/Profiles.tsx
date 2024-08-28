"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Profiles = ({ doctorData }) => {
  return (
    <div>
      {doctorData?.map((doctor) => {
        let docName =
          doctor?.First_Name + " " + doctor?.Last_Name + " " + doctor?.Degree;
        return (
          <div
            key={doctor?.id}
            className=" mx-auto mb-4  mt-2 overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-900 dark:text-white sm:md:max-w-sm md:max-w-4xl lg:w-[855px]"
          >
            <div className="p-2 pl-10 md:flex">
              <div className="md:shrink-0">
                <Image
                  alt="Doctor"
                  className=" rounded-xl  sm:h-72 w-full object-cover sm:w-24 md:h-full md:w-48"
                  src={doctor?.img}
                  height={"200"}
                  width={"200"}
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
                  {docName}
                </div>
                <a
                  href="#"
                  className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
                >
                  {doctor?.Specialty}
                </a>
                <p className="mt-2 text-slate-500"> {doctor?.Organization}</p>
                <br />
                <div className="pb-8 pt-6">
                  <Link
                    className="rounded-full bg-cyan-700 px-4 py-2 font-bold text-white hover:bg-lime-600"
                    href={`/find_doctor/${doctor?.id}`}
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
