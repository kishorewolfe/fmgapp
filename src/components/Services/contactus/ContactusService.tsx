import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const ContactusService = (props: Props) => {
  return (
    <div
      style={{ marginTop: "200px" }}
      className="bg-slate-50 dark:bg-slate-900"
    >
      <section className="body-font container relative rounded-lg text-gray-700 shadow-lg">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d126.8637920945285!2d-117.68472671959053!3d34.026459064496365!2m2!1f186.66956433079434!2f45!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x80c3331eb1bba35b%3A0x257f7724703edec3!2sMy%20Family%20Medical%20Group!5e1!3m2!1sen!2sin!4v1718425728292!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24 text-center">
          <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
            <h2 className="title-font mb-1 items-center justify-center text-lg font-medium text-gray-900 ">
              Contact Us
            </h2>

            <Image
              src="/images/logo/FMG.png"
              alt="logo"
              className=" self-center dark:hidden"
              width={300}
              height={100}
            />
            <br />
            <p className="title-font mb-5 font-medium leading-relaxed text-gray-600">
              5475 Walnut Ave. Chino, CA 91710
            </p>
          </div>
        </div>
      </section>

     <div className="container mx-auto px-4 mt-10 space-y-10">
  {/* Hours of Operation & Phone Lines */}
  <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
    {/* Hours of Operation */}
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-gradient-to-tr from-lime-500 to-cyan-600 shadow p-1">
        <div className="rounded-md bg-white p-6 dark:bg-slate-800">
          <h4 className="text-2xl font-bold text-cyan-600 dark:text-lime-600">
            Hours of Operation:
          </h4>
          <div className="mt-4 space-y-4">
            <p className="font-bold text-black dark:text-white text-lg">
              Monday - Friday: 8:30 AM to 5 PM
            </p>
            <p className="font-bold text-black dark:text-white text-lg">
              Saturday - Sunday: Closed
            </p>
            <p className="font-bold text-black dark:text-white text-lg">
              Closed for lunch: 12:30 PM to 1:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Phone Lines */}
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-gradient-to-tr from-lime-500 to-cyan-600 shadow p-1">
        <div className="rounded-md bg-white p-6 dark:bg-slate-800">
          <h4 className="text-2xl font-bold text-cyan-600 dark:text-lime-600">
            Phone Lines
          </h4>
          <div className="mt-4 space-y-4">
            <p className="font-bold text-black dark:text-white text-lg">
              Main Line: 909-591-6446
            </p>
            <p className="font-bold text-black dark:text-white text-lg">
              After Hours: 909-398-0575
            </p>
            <br/> <br/>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Nurse Advice */}
  <section className="flex flex-col items-center justify-center gap-10 lg:flex-row">
    <div className="w-full lg:w-1/2">
      <Image
        className="w-full rounded-3xl"
        src="/images/contactus/nurseadvice.jpg"
        alt="Urgent Care"
        width={400}
        height={100}
      />
    </div>
    <div className="flex flex-col lg:w-[650px]">
      <h1 className="text-4xl font-bold lg:text-6xl text-lime-600">
        Nurse advice
      </h1>
      <div className="my-4 h-2 w-20 bg-green-700"></div>
      <p className="mb-6 text-xl">
        The Nurse Advice Line provides health care support to the beneficiaries 24/7
      </p>
      <Link href="/nurseadvice">
        <div className="relative group">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-600 to-lime-600 opacity-25 blur transition group-hover:opacity-100"></div>
          <div className="relative z-10 flex items-center justify-center px-7 py-6 bg-white ring-1 ring-gray-900/5 dark:bg-dark rounded-lg">
            <h1 className="text-3xl group-hover:text-cyan-600 transition">Nurse Advice Lines →</h1>
          </div>
        </div>
      </Link>
    </div>
  </section>

  {/* Emails */}
  <section className="flex flex-col  gap-10 lg:flex-row">
    <div className="flex flex-col lg:w-[650px]">
      <h1 className="text-4xl font-bold lg:text-6xl text-lime-600">Emails</h1>
      <div className="my-4 h-2 w-20 bg-green-700"></div>
      <div className="space-y-4 text-xl">
        <p>Administration, Suggestions or Concerns:</p> 
         <div className="flex items-center gap-3 rounded-md  py-1">
<svg width="28px" height="28px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#65A30D" stroke="#65A30D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#65A30D]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#65A30D"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#65A30D]"> </path> </g> </g> </g> </g></svg>

<p className=" dark:text-white text-black text-lg">
    admin@myfamilymg.com</p>
    </div>
       
        <p>Billing Inquiries:</p>

           <div className="flex items-center gap-3 rounded-md  py-1">
<svg width="28px" height="28px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#65A30D" stroke="#65A30D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#65A30D]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#65A30D"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#65A30D]"> </path> </g> </g> </g> </g></svg>

<p className=" dark:text-white text-black text-lg">
    billing@myfamilymg.com</p>
    </div>
        
              <p>Career Opportunities: </p>

              
           <div className="flex items-center gap-3 rounded-md  py-1">
<svg width="28px" height="28px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#65A30D" stroke="#65A30D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#65A30D]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#65A30D"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#65A30D]"> </path> </g> </g> </g> </g></svg>

<p className=" dark:text-white text-black text-lg">
    careers@myfamilymg.com</p>
    </div>
              
              
      </div>
    </div>
    <div className="w-full lg:w-1/2">
      <Image
        className="w-full rounded-3xl"
        src="/images/contactus/hospsupport.jpg"
        alt="Emails"
        width={400}
        height={100}
      />
    </div>
  </section>

  {/* Compliance */}
  <section className="flex flex-col pb-12 justify-center gap-10 lg:flex-row">
    <div className="w-full lg:w-1/2">
      <Image
        className="w-full rounded-3xl"
        src="/images/contactus/compliance.jpg"
        alt="Compliance"
        width={400}
        height={100}
      />
    </div>
    <div className="flex flex-col lg:w-[650px]">
      <h1 className="text-4xl font-bold lg:text-6xl text-lime-600">Compliance</h1>
      <div className="my-4 h-2 w-20 bg-green-700"></div>
      <div className="  ring-gray-900/5 space-y-4">
       <div className="flex items-center gap-3 rounded-md  py-4">
<svg width="28px" height="28px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#65A30D" stroke="#65A30D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#65A30D]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#65A30D"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#65A30D]"> </path> </g> </g> </g> </g></svg><p className=" dark:text-white text-black text-lg">
    
   compliance@myfamilymg.com
  </p>
</div>
<div className="flex items-center gap-3 rounded-md  py-1">
  <svg width="28px" height="28px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#65A30D"></path> </g></svg>
<p className=" text-black dark:text-white text-lg">
          (909) 591-6446 ext. 284
        </p>
</div>

        
      </div>
    </div>
  </section>
</div>

    </div>
  );
};

export default ContactusService;
