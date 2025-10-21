"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Profiles = ({ doctorData }) => {
  return (
    <div>
      {doctorData.map((doctor) => {
        const docName = `${doctor?.FirstName || ""} ${doctor?.LastName || ""} ${doctor?.Degree1 || ""}`.trim();
        return (
          <div
            key={doctor?.Id}
            className="relative mx-auto mb-4 mt-2 overflow-hidden rounded-xl bg-white shadow-md dark:bg-slate-900 dark:text-white sm:md:max-w-sm md:max-w-4xl lg:w-[855px] border border-gray-100 dark:border-slate-700"
          >
            {/* Coming Soon Tag */}
            {doctor?.upcomingJoin && (
              <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm border border-amber-200">
                Coming on January 1, 2026
              </div>
            )}

            <div className="p-2 pl-4 md:flex">
              <div className="md:shrink-0">
                <Image
                  alt={docName || "Doctor"}
                  className="rounded-xl w-full object-cover sm:w-full sm:h-full md:h-full md:w-48"
                  src={doctor?.image_url || "/images/placeholder/Doc_M_Placeholder.jpg"}
                  height={150}
                  width={180}
                />
              </div>
              <div className="p-8">
                <div className="md:text-md sm:text-sm text-lg font-semibold uppercase tracking-wide text-cyan-600">
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