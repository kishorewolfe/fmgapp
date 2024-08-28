import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Displaycard from "@/components/DisplayCard/Displaycard";
import ServiceCard from "@/components/OurServices/ServiceCard";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    <div className="bg-gray-100">
      <section className="cover bg-blue-teal-gradient relative bg-cyan-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
        
        <div className="h-full w-full absolute top-0 left-0 z-0 headerimg ">
        <Image src="/images/services/doc1.jpg" alt=""  width={1080} height={1920}     objectFit='contain' className=" w-full object-fill opacity-20"/>
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Our Services            </h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">My Family Medical Group is home to a highly skilled team of physicians, nurses and support staff providing a variety of services under one roof to help you and your family, develop and maintain excellent health.</p>
            <a href="tel:+909-591-6446" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold servicebutton">Call Us To Book
              Appointment</a>
          </div>
        </div>
      </section>
    </div>
      {/* <Breadcrumb
        pageName="Our Services"
        description=""/> */}

      <Displaycard/>
      <Blog/>

       {/* <Contact /> */}
      <ServiceCard/> 
    </>
  );
};

export default ContactPage;
