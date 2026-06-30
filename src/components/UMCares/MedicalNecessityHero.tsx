import React from "react";
import Image from "next/image";
import Link from "next/link";

const MedicalNecessityHero = () => {
  return (
    <section className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[260px_1fr] lg:gap-12 lg:p-12">
          {/* Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/umcares/clipboard.png"
              alt="Medical Necessity Supplementation Criteria"
              width={200}
              height={200}
              priority
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-5 text-center text-4xl font-bold leading-tight text-lime-600 dark:text-white lg:text-left lg:text-5xl">
              Medical Necessity Supplementation Criteria
            </h1>

            <p className="text-center text-xl text-gray-600 dark:text-gray-300 lg:text-left">
              Evidence-based criteria by service category.
            </p>

            <div className="mt-8 rounded-xl border border-lime-200 bg-lime-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <p className="text-justify text-[16px] leading-8 text-gray-700 dark:text-gray-300">
                  View Medical Necessity Supplementation Criteria organized by
                  service category. Documents are presented in an easy-to-browse
                  index and are available as in-browser PDF files for convenient
                  access across desktop and mobile devices.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/medical-necessity-supplementation-criteria/documents"
                className="inline-flex w-full items-center justify-center rounded-xl bg-lime-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-lime-700 hover:shadow-lg sm:w-auto"
              >
                View Criteria by Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalNecessityHero;