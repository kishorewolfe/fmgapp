"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import { motion } from "framer-motion";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 mt-10 py-10 md:py-10 lg:py-20 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="mx-auto max-w-[1070px] overflow-hidden rounded-md "
              data-wow-delay=".15s"
            >
              <div className=" relative aspect-[77/40] items-center justify-center  shadow-lg  ">
                <div className="rounded-lg bg-white p-4 text-center shadow  dark:border-gray-700 dark:bg-gray-800 xs:mt-1 sm:p-8 md:mt-40">
                  <h2 className=" mb-1 text-3xl font-bold !leading-tight text-lime-600 dark:text-white sm:text-4xl md:text-[45px]">
                    My Family Medical Group is a large multi-specialty group
                  </h2>
                  <p className="mb-1 mt-10 text-base text-gray-500  dark:text-gray-400 sm:text-lg">
                    My Family Medical Group is a large multi-specialty group
                    practice with an emphasis on primary care. We aim to provide
                    healthcare services to our community with dignity,
                    compassion and respect. Proudly serving the community since
                    1989.My Family Medical Group physicians, physician
                    assistants, and nurse practitioners form a dedicated team of
                    experts that will help you manage all your healthcare needs.
                  </p>
                  <div className=" mt-2 items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
                    <a
                      href="#"
                      className=" inline-flex items-center justify-center rounded-lg bg-gray-800 px-20 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                    >
                      <div className="text-left rtl:text-right ">
                        <div className="font-sans -mt-1 text-sm font-semibold">
                          Call Us Now
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
