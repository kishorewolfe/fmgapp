import Link from "next/link";
import React from "react";

type Props = {};

const LabCorpCard = (props: Props) => {
  return (
    <main className="bg-gray-100 pt-16 dark:bg-slate-900">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 w-full md:mb-0 md:w-1/2">
            <p className="mb-4 text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Find a Lab Near You
            </p>
            <p className="mb-6 text-xl text-gray-600 dark:text-white">
              Locate a patient center lab in your area, check its hours, and
              schedule an appointment.
            </p>
            <Link
              href="https://www.labcorp.com/"
              className="inline-block rounded-lg bg-lime-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-lime-700"
            >
              Learn More
            </Link>
          </div>

          <div className="w-full md:w-1/2">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Why Choose Us?
              </h2>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 text-lime-600 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  We perform in-house blood draws for our patients on a walk-in
                  basis M-F from 8:00am-5:00pm
                </li>
                <li className="flex items-center dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 text-lime-600 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Be sure to bring the Labcorp order form from your healthcare
                  provider
                </li>
                <li className="flex items-center dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 text-lime-600 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  For your convienence, you can also use the link below to
                  schedule an appointment at a Labcorp location
                </li>
              </ul>
              <div className="space-y-4">
                <Link
                  href="https://www.labcorp.com/labs-and-appointments"
                  className="block rounded-lg border border-lime-600 px-6 py-3 text-center font-semibold text-lime-600 transition duration-300 hover:bg-blue-50"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LabCorpCard;
