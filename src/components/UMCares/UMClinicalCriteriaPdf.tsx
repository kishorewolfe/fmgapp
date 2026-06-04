import React from "react";

const UMClinicalCriteriaPdf = () => {
  return (
    <div className="mx-auto mt-8 mb-2 max-w-5xl px-7 py-10 lg:px-5 lg:py-14">
      <div className="rounded-3xl border border-lime-200 bg-lime-50 p-8 shadow-sm">
        
        <h2 className="text-3xl font-semibold text-lime-600 md:text-4xl">
          UM2017 Clinical Criteria for UM Decisions
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Application of Evidence Based Criteria
        </p>

        <div className="mt-6 flex items-start">
          <svg
            className="mr-3 h-6 w-6 flex-shrink-0 text-lime-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <p className="text-gray-600 lg:text-lg">
            Download the official clinical criteria document used to support
            evidence-based utilization management decisions and medical
            necessity reviews.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/files/pdfs/UM2017.pdf"
            download
            className="inline-flex items-center rounded-lg border border-lime-600 bg-lime-600/10 px-6 py-3 font-semibold text-cyan-600 transition duration-200 hover:shadow-lg"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default UMClinicalCriteriaPdf;