import React from "react";

import CardForms from "@/components/Forms/CardForms";
import Image from "next/image";

type Props = {};

const SpecialistsPage = (props: Props) => {
  return (
    <div>
      {" "}
      <div>
        <section
          className="cover bg-blue-teal-gradient relative flex min-h-screen items-center overflow-hidden bg-cyan-600 px-4 py-48 sm:px-8 lg:px-16
xl:px-40 2xl:px-64"
        >
          <div className="absolute left-0 top-0 z-0 h-full w-full headerimg headerimg">
            <Image
              src="/images/services/specialists.jpg"
              alt=""
              width={1080}
              height={1920}
              objectFit="contain"
              className=" w-full object-fill opacity-20"
            />
          </div>

          <div className="h-100 relative z-10 lg:mt-16 lg:w-3/4 xl:w-2/4">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Specialists{" "}
              </h1>
              <p className="mt-4 text-xl leading-snug text-blue-100 md:text-2xl">
                My Family Medical welcomes new patients. See our welcome letter
                here:
              </p>
              <a
                href="/files/MFMG Master Roster - 7-1-24.xlsx"
                className="mt-8 inline-block rounded bg-teal-500 px-8 py-4 font-semibold text-white picbutton"
                download={"MFMG_Master"}
                                   type="xlsx"
              >
                Download Master Data
              </a>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default SpecialistsPage;
