import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Displaycard from "@/components/DisplayCard/Displaycard";
import ServiceCard from "@/components/OurServices/ServiceCard";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other  
};


const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-100">
        <section
          className="cover bg-blue-teal-gradient relative flex min-h-screen items-center overflow-hidden bg-cyan-600 px-4 py-48 sm:px-8 lg:px-16
      xl:px-40 2xl:px-64"
        >
          <div className="headerimg absolute left-0 top-0 z-0 h-full w-full ">
            <Image
              src="/images/services/doc1.jpg"
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
                Our Services{" "}
              </h1>
              <p className="mt-4 text-xl leading-snug text-blue-100 md:text-2xl">
                My Family Medical Group is home to a highly skilled team of
                physicians, nurses and support staff providing a variety of
                services under one roof to help you and your family, develop and
                maintain excellent health.
              </p>
              <a
                href="tel:+909-591-6446"
                className="servicebutton mt-8 inline-block rounded bg-teal-500 px-8 py-4 font-semibold text-white"
              >
                Call Us To Book Appointment
              </a>
            </div>
          </div>
        </section>
      </div>

      <Displaycard />
      <Blog />

      <ServiceCard />
    </>
  );
};

export default ContactPage;
