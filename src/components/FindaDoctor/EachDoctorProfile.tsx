import React from "react";
import LanguagesSpoken from "./LanguagesSpoken";
import { doctorData } from "./DoctorData";
import Image from "next/image";

type Props = {};

const EachDoctorProfile = (props) => {
  let { doctor } = props;
  console.log(doctor);
  let docName =
    doctor[0]?.First_Name +
    " " +
    doctor[0]?.Last_Name +
    " " +
    doctor[0]?.Degree;
  let location = doctor[0]?.Address;
  let address =
    location?.Street +
    "," +
    location?.Suite +
    "," +
    location?.City +
    "," +
    location?.State +
    "," +
    location?.Zip;
  let phNum = "tel:" + doctor[0]?.Phone;
  return (
    <div className="lg:mt-[120px] sm:mt-[120px]" style={{ marginTop: "140px" }}>
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="lg:mx-[12.5rem] sm:mx-[7rem] md:mx-[8rem] flex items-start justify-start gap-2">
          <a
            href="/providers"
            className="mt-8 inline-flex items-center rounded-md border border-lime-600 px-3 py-1.5 text-lime-600 hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            <span className="ml-1 text-lg font-bold">Back</span>
          </a>{" "}
        </div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 gap-6 px-4 sm:grid-cols-12">
            <div className="col-span-4 sm:col-span-3">
              <div
                className="rounded-lg bg-white p-6 shadow dark:bg-slate-800 dark:text-white"
                style={{ height: "560px" }}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/doctortool/docvector.jpg"
                    className="mb-4 h-32 w-32 shrink-0 rounded-full bg-gray-300"
                    alt="Doctor"
                    width={100}
                    height={100}
                  ></Image>
                  <h1 className="text-md font-bold">{docName}</h1>
                  <p className="text-lime-600">{doctor[0]?.Specialty}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                      href={phNum}
                      className="rounded bg-cyan-600 px-4 py-2 text-white hover:bg-lime-600 "
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="mb-2 font-bold uppercase tracking-wider text-gray-700 lg:text-lg sm:text-sm md:text-md lg:text-lg">
                    Address
                  </span>
                  <h6>{address}</h6>
                </div>

                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="mb-2 font-bold uppercase tracking-wider text-gray-700">
                    Languages
                  </span>
                  <LanguagesSpoken languages={doctor[0]?.Languages} />
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div
                className="rounded-lg bg-white p-6 shadow dark:bg-slate-800 dark:text-white"
                style={{ height: "560px" }}
              >
                <div className="my-auto flex w-full flex-col justify-center gap-2 py-6">
                  <div className="flex w-full justify-center gap-2 xs:flex-col sm:flex-row">
                    <div className="w-full">
                      <dl className="divide-y  text-gray-900 dark:divide-gray-700 dark:text-white">
                        <div className="flex flex-col pb-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg lg:text-lg">
                            First Name
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.First_Name}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Last Name
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Last_Name}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Degree
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Degree}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Gender
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Gender}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            State
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Address?.State}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="w-full dark:bg-slate-800 dark:text-white">
                      <dl className="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
                        <div className="flex flex-col pb-3">
                          <dt className="mb-1 text-gray-500 dark:text-white md:text-lg sm:text-sm lg:text-lg">
                            Specialty
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Specialty}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Organization
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Organization}
                          </dd>
                        </div>

                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Phone Number
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Phone}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Fax
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Fax}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg sm:text-sm lg:text-lg">
                            Zip
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Address?.Zip}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachDoctorProfile;
