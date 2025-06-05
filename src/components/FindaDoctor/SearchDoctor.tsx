"use client";
import Profiles from "./Profiles";
import { doctorData } from "./DoctorData";
import data from "./DoctorFCPData.json"
import React, { useEffect, useState, CSSProperties, useCallback } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from 'next/navigation';
import debounce from "lodash.debounce";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "cyan",
  marginTop:"20px"
};

const SearchDoctor = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [color] = useState("#0891B2");
  const [searchTerm, setSearchTerm] = useState("");
  const [docTypeFilter, setDocTypeFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data?.data ?? []);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchDone, setSearchDone] = useState(false);

  const itemsPerPage = 5;

  const uniqueSpecialties = Array.from(
    new Set(data?.data.map((doc) => doc.ContractedSpecialty))
  ).sort();

  const applyFilters = (searchValue, docType, specialty) => {
    const term = searchValue.toLowerCase();
    const filtered = data?.data.filter((item) => {
      const matchesSearchTerm =
        item?.FirstName?.toLowerCase().includes(term) ||
        item?.LastName?.toLowerCase().includes(term) ||
        item?.ContractedSpecialty?.toLowerCase().includes(term) ||
        item?.Practice_Name?.toLowerCase().includes(term) ||
        `${item?.FirstName} ${item?.LastName}`.toLowerCase().includes(term) ||
        `${item?.FirstName}${item?.LastName}`.toLowerCase().includes(term);

      const matchesDocType = docType ? item.docType === docType : true;
      const matchesSpecialty = specialty ? item.ContractedSpecialty === specialty : true;

      return matchesSearchTerm && matchesDocType && matchesSpecialty;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Debounced version of applyFilters to avoid excessive filtering on typing
  const debouncedApplyFilters = useCallback(
    debounce((term, docType, specialty) => {
      applyFilters(term, docType, specialty);
      setLoading(false);
      setSearchDone(term.trim().length > 0 || docType !== "" || specialty !== "");
      router.push(
        `/find_doctor?search=${encodeURIComponent(term)}&docType=${docType}&specialty=${encodeURIComponent(specialty)}`
      );
    }, 500),
    []
  );

  // On typing, update searchTerm and trigger debounce
  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    setLoading(true);

    debouncedApplyFilters(val, docTypeFilter, specialtyFilter);
  };

  // When filters change, trigger search immediately
  useEffect(() => {
    setLoading(true);
    debouncedApplyFilters(searchTerm, docTypeFilter, specialtyFilter);
  }, [docTypeFilter, specialtyFilter]);

  // On button click, run search immediately (cancel debounce first)
  const handleSearchClick = () => {
    debouncedApplyFilters.cancel();
    setLoading(true);
    applyFilters(searchTerm, docTypeFilter, specialtyFilter);
    setLoading(false);
    setSearchDone(
      searchTerm.trim().length > 0 || docTypeFilter !== "" || specialtyFilter !== ""
    );
    router.push(
      `/find_doctor?search=${encodeURIComponent(searchTerm)}&docType=${docTypeFilter}&specialty=${encodeURIComponent(specialtyFilter)}`
    );
  };

  const handleSearchClickReset = () => {
    debouncedApplyFilters.cancel();
    setLoading(true);
    setSearchTerm("");
    setDocTypeFilter("");
    setSpecialtyFilter("");
    setSearchDone(false);
    setFilteredData(data?.data ?? []);
    setCurrentPage(1);
    router.push("/find_doctor");
    setLoading(false);
  };

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 space-y-6">
      <input
        type="text"
        className="w-full rounded-md border border-gray-300 p-3 dark:bg-white dark:text-gray-900"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search name, specialty, or organization"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={docTypeFilter}
          onChange={(e) => setDocTypeFilter(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-3 dark:bg-gray-500 dark:text-gray-300"
        >
          <option value="">All Doc Types</option>
          <option value="PCP">PCP</option>
          <option value="Specialist">Specialists</option>
        </select>

        <select
          value={specialtyFilter}
          onChange={(e) => setSpecialtyFilter(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-3 dark:bg-gray-500 dark:text-gray-300"
        >
          <option value="">All Specialties</option>
          {uniqueSpecialties?.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>

        <div className="flex justify-end">
          <button
            onClick={handleSearchClick}
            className="w-full bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700"
          >
            Find Doctor
          </button>
        </div>
      </div>

      {loading ? (<div className="flex items-center justify-center ">
  <PuffLoader
    color={color}
    loading={loading}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
</div>

      
      ) : (
        <>
          {searchDone && (
            <div className="dark:bg-slate-900 bg-slate-100 p-5 rounded-md flex flex-wrap justify-between items-center gap-4 shadow-md">
              <span className="text-slate-800 dark:text-slate-100 text-sm md:text-base font-medium">
                You have searched for:{" "}
                <strong className="text-cyan-600">
                  {searchTerm || docTypeFilter || specialtyFilter}
                </strong>
              </span>

              <button
                onClick={handleSearchClickReset}
                className="bg-cyan-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Reset
              </button>
            </div>
          )}

          <Profiles doctorData={paginatedData} />

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded text-gray-800 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">
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
        </>
      )}
    </div>
  );
};


export default SearchDoctor;
