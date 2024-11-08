"use client";
import React, { useState } from "react";
import { doctorData } from "./DoctorData";
import Profiles from "./Profiles";

type Props = {};

const SearchDoctor = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(doctorData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = doctorData.filter(
      (item) =>
        item.First_Name.toLowerCase().includes(term) ||
        item.Last_Name.toLowerCase().includes(term) ||
   item?.Specialty.toLocaleString().toLocaleLowerCase().includes(term) ||
        item.Organization.toLowerCase().includes(term)
    );

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Calculate paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handlers for page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="flex w-11/12 md:w-8/12 xl:w-6/12" style={{ marginBottom: "20px" }}>
        <div className="flex w-full rounded-md">
          <input
            type="text"
            name="q"
            className="w-full rounded-md rounded-r-none border border-2 border-gray-300 p-3 placeholder-current dark:border-none dark:bg-gray-500 dark:text-gray-300"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Find Provider"
          />
          <button className="inline-flex items-center gap-2 rounded-r-md bg-cyan-600 px-6 py-3 text-lg font-semibold text-white">
            <span>Find</span>
            <svg
              className="h-5 w-5 fill-current p-0 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Pass paginated data to Profiles */}
      <Profiles doctorData={paginatedData} />
      
      {/* Pagination controls */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded text-gray-800 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mt-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded text-gray-800 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchDoctor;
