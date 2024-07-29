import Image from "next/image";
import React from "react";

type Props = {};

const Patientservicescreen = (props: Props) => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="mb-10 w-full sm:w-7/12">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex items-center justify-between px-4">
             
              <div>
        
              </div>
            </nav>
            <header className="container mt-10 h-full items-center px-4 lg:mt-0 lg:flex headerimg">
              <div className="w-full">
                <h1 className="text-4xl font-bold lg:text-6xl">

                <span className="text-lime-600">Patient</span>   <span className="text-cyan-600">Services</span> 
                </h1>
                <div className="my-4 h-2 w-20 bg-green-700"></div>
                <p className="mb-10 lg:text-xl sm:text-sm">
                My Family Medical Group understands that navigating through the healthcare system can sometimes be confusing. On this website you will be able to find information that can help make the process easier.
                </p>
                <p className="lg:text-lg sm:text-sm leading-relaxed text-slate-500">If you still have more questions, feel free to call Patient Services by calling (909)591-6446 from 8:00AM to 5:00PM, on weekdays. If you are experiencing a more immediate need, please come in and see us our nurses will be able to direct you with health advice and we are usually able to get you a same day appointment.
            </p>
                <button className=" mt-5 p-10 rounded bg-cyan-600 px-4 py-2 text-2xl font-medium text-white shadow hover:bg-lime-600">
                  Call Us 
                </button>
              </div>
            </header>
          </div>
        </div>
        <section className="cover bg-blue-teal-gradient relative sm:w-5/12 bg-cyan-600 sm:px-8 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
          
          <div className="h-full w-full absolute top-0 left-0 z-0 headerimg">
          <Image
          src="/images/services/patientservice.jpg"
          alt="Leafs"
          className="h-48 object-cover sm:h-screen  opacity-20"
          width={1080}
          height={1920}
          objectFit='contain' 
        ></Image>
        </div>
       
        </section>


      </div>
    </div>
  );
};

export default Patientservicescreen;
