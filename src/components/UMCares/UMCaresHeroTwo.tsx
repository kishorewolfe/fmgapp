import React from "react";
import Image from "next/image";
import Link from "next/link";

const UMCaresHeroTwo = () => {
  return (
    <section className="mx-auto my-10 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
        {/* Top Section */}
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[260px_1fr] lg:gap-12 lg:p-12">
          {/* Image */}
          <div className="flex items-start justify-center">
            <Image
              src="/images/umcares/MCG.jpeg"
              alt="MCG Clinical Guidelines"
              width={240}
              height={240}
              priority
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="mb-6 text-center text-4xl font-bold text-lime-600 dark:text-white lg:text-left lg:text-5xl">
              MCG
            </h1>

            <div className="space-y-5 text-justify text-[16px] leading-8 text-gray-700 dark:text-gray-300">
              <p>
                <strong>MFMG uses MCG</strong> to aid in clinical decision
                making regarding utilization management.
              </p>

              <p>
                MCG is a nationally recognized clinical decision support tool
                used to guide evidence-based medical necessity determinations.
              </p>

              <p>
                MFMG uses MCG Guidelines to help review medical necessity for
                health service requests. MCG Guidelines are the protected
                intellectual property of MCG. MFMG is not able to distribute
                them without the permission of MCG. MCG has provided a tool that
                allows MFMG members and prospective members to view relevant MCG
                Guidelines. However, you will not be able to print them.
              </p>

              <p className="font-semibold text-lime-600 dark:text-lime-400">
                Follow the instructions below for access to MCG Guidelines.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="https://akido.access.mcg.com/index"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-lime-600 px-6 py-4 text-center text-base font-semibold text-white transition duration-200 hover:bg-lime-700 hover:shadow-lg sm:w-auto"
              >
                View Clinical Guidelines Used for Medical Necessity Reviews
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700" />

        {/* Access Instructions */}
        <div className="p-6 sm:p-8 lg:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-lime-600 dark:text-white lg:text-left">
            Access Instructions
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-600 font-bold text-white">
                1
              </div>

              <p className="text-justify leading-7 text-gray-700 dark:text-gray-300">
                Click the button above to access the MCG Guidelines. Read the
                disclaimer and accept the Terms and Conditions.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-600 font-bold text-white">
                2
              </div>

              <p className="leading-7 text-gray-700 dark:text-gray-300">
                Complete the User Information Form.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-600 font-bold text-white">
                3
              </div>

              <p className="leading-7 text-gray-700 dark:text-gray-300">
                Complete the verification process (CAPTCHA) to continue.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-600 font-bold text-white">
                4
              </div>

              <p className="leading-7 text-gray-700 dark:text-gray-300">
                Click on the arrow icon to expand a guideline product.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-600 font-bold text-white">
                5
              </div>

              <p className="leading-7 text-gray-700 dark:text-gray-300">
                Click on the guidelines you wish to view.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>

              <p className="text-[15px] leading-7 text-blue-900 dark:text-blue-200">
                <strong>Note:</strong> Guideline sessions automatically time out
                after <strong>5 minutes</strong> of inactivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UMCaresHeroTwo;