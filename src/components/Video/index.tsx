"use client";

import { useState } from "react";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="flex items-center justify-center bg-white px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1400px] rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 dark:shadow-md sm:p-10">
          <h1 className="bg-gradient-to-br from-cyan-600 via-cyan-600 to-cyan-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl lg:text-6xl">
            My Family Medical Group
          </h1>

          <p className="mt-6 text-center text-base leading-relaxed text-gray-800 dark:text-gray-200 sm:text-lg">
            My Family Medical Group is a large multi-specialty group practice
            with an emphasis on primary care. We aim to provide healthcare
            services to our community with dignity, compassion and respect.
            Proudly serving the community since 1989. Our physicians, physician
            assistants, and nurse practitioners form a dedicated team of experts
            to help you manage all your healthcare needs.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <a
              href="tel:+909-591-6446"
              className="flex items-center justify-center gap-2 rounded-lg bg-lime-600 px-6 py-3 text-white transition hover:bg-cyan-600"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.0002 4V5C15.0002 6.88562 15.0002 7.82843 15.586 8.41421C16.1718 9 17.1146 9 19.0002 9H20.5002M20.5002 9L18.0002 7M20.5002 9L18.0002 11"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              <span className="text-base font-semibold">Call Us Now</span>
            </a>

            <a
              href="/find_doctor"
              className="flex items-center justify-center gap-2 rounded-lg border border-lime-600 px-6 py-3 text-lime-600 transition hover:bg-teal-50 dark:hover:bg-gray-700"
            >
              <span className="text-base font-semibold">Explore Doctors →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
