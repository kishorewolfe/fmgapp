import CardForms from "@/components/Forms/CardForms";
import React from "react";
import Image from "next/image";
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <section
        className="cover bg-blue-teal-gradient relative flex min-h-screen items-center overflow-hidden bg-cyan-600 px-4 py-48 sm:px-8 lg:px-16
      xl:px-40 2xl:px-64"
      >
        <div className="headerimg absolute left-0 top-0 z-0 h-full w-full ">
          <Image
            src="/images/services/healthforms.jpg"
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
              Form Downloads{" "}
            </h1>
          </div>
        </div>
      </section>

      <CardForms />
    </div>
  );
};

export default page;
