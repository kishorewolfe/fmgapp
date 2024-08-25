"use client";
import React, { useState } from "react";
import { doctorData } from "./DoctorData";
import Profiles from "./Profiles";
type Props = {};

const SearchDoctor = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(doctorData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = doctorData.filter(
      (item) =>
        item.First_Name.toLowerCase().includes(term) ||
        item?.Last_Name.toLowerCase().includes(term) ||
        item?.Specialty.toLocaleString().toLocaleLowerCase().includes(term) ||
        item?.Organization.toLowerCase().includes(term),
    );

    setFilteredData(filtered);
  };
  return (
    <div className="mx-auto  flex flex-col items-center">
      <div
        className="flex w-11/12 md:w-8/12 xl:w-6/12"
        style={{ marginBottom: "20px" }}
      >
        <div className="flex w-full rounded-md">
          <input
            type="text"
            name="q"
            className="w-full rounded-md rounded-r-none border border-2 border-gray-300 p-3 placeholder-current dark:border-none  dark:bg-gray-500 dark:text-gray-300 "
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Find Provider"
          />
          <button className="inline-flex items-center gap-2 rounded-r-md bg-cyan-600 px-6 py-3 text-lg font-semibold text-white">
            <span>Find</span>
            <svg
              className="h-5 w-5 fill-current p-0 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      <Profiles doctorData={filteredData} />
    </div>
  );
};

export default SearchDoctor;
