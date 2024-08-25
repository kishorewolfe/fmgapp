"use client";
import React from "react";
import SearchDoctor from "./SearchDoctor";
import Profiles from "./Profiles";
import EachDoctorProfile from "./EachDoctorProfile";

type Props = {};

const FindDoctor = (props: Props) => {
  return (
    <div className="md:mt-15 sm:mt-15 lg:mt-10" style={{ marginTop: "100px" }}>
      <div className="dark:bg-gray-800">
        <div className="dark:bg-transparent">
          <div className="mx-auto flex flex-col items-center  sm:py-8">
            <div className="mb-1 w-11/12 flex-col items-center justify-center sm:mb-10 sm:w-2/3 lg:flex">
              <h1 className="text-center text-4xl font-black leading-10 text-gray-800 dark:text-white sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
                Search our{" "}
                <span className="text-lime-600 dark:text-lime-600">
                  Providers{" "}
                </span>
              </h1>
              <p className="mt-5 text-center text-xl font-normal text-gray-600 dark:text-gray-300 sm:mt-10 lg:w-10/12">
                You can Search by Name, Specialty, Organization
              </p>
              <br />
            </div>
          </div>
          <SearchDoctor />
          <br />
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
