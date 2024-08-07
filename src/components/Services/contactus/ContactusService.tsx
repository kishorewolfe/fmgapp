import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {};
// Hours of Operation:
// Monday - Friday 12PM to 11PM
// Saturday - Sunday 8AM to 8PM

// Phone Lines
// Main Line: 909-591-6446
// Appointments: 909-287-7555
// Patient Billing: 909-287-7520
// Urgent Care: 909-287-7501
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
              My Family Medical Group 5475 Walnut Ave. Chino, CA 91710
            </p>
          </div>
        </div>
      </section>

      <div className="container mt-10 ">
        <section className=" grid grid-cols-1 gap-x-8 gap-y-4 p-2 sm:my-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mt-3 flex h-full flex-col justify-between rounded-lg bg-gray-50 bg-gradient-to-tr from-lime-500 to-cyan-600 pb-8 shadow xl:p-1">
              <div className="rounded-md bg-white p-7 dark:bg-slate-800 ">
                <h4 className=" text-2xl font-bold leading-tight text-cyan-600 dark:text-lime-600">
                  Hours of Operation:
                </h4>
                <div className="my-6">
                  <p className="my-3 font-bold text-black dark:text-white sm:text-sm lg:text-xl">
                    Monday - Friday 8AM to 5PM
                  </p>
                  <p className="my-3 font-bold text-black dark:text-white sm:text-sm lg:text-xl">
                    Saturday - Sunday 8AM to 8PM
                  </p>
                  <br />
                  <br />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="mt-3 flex h-full flex-col justify-between rounded-lg bg-gray-50 bg-gradient-to-tr from-lime-500 to-cyan-600 pb-8 shadow xl:p-1 ">
              <div className="rounded-md bg-white p-7 dark:bg-slate-800 ">
                <h4 className=" text-2xl font-bold leading-tight text-cyan-600 dark:text-lime-600">
                  Phone Lines
                </h4>

                <div className="my-8">
                  <p className="my-3 font-bold text-black dark:text-white sm:text-sm lg:text-xl ">
                    Main Line: 909-591-6446
                  </p>
                  <p className="my-3 font-bold text-black dark:text-white sm:text-sm lg:text-xl ">
                    Appointments: 909-287-7555
                  </p>
                  <p className="my-3 font-bold text-black dark:text-white sm:text-sm lg:text-xl ">
                    Patient Billing: 909-287-7520
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-10 ">
            <div className=" mx-auto  my-10 flex flex-col items-center justify-center gap-x-10 gap-y-10 py-10 dark:bg-gray-800 lg:flex-row lg:px-2 lg:py-14">
              <div className="hero-image relative isolate z-10 w-full rounded-3xl md:px-5 md:pt-2 lg:w-1/2 lg:px-0 lg:pt-0">
                <Image
                  className="w-full rounded-3xl"
                  src="/images/contactus/nurseadvice.jpg"
                  alt="Urgent Care"
                  width={400}
                  height={100}
                />
              </div>
              <div className="flex flex-col lg:w-[650px] lg:px-5 ">
                <header className="container mt-10 h-full items-center px-1 lg:mt-0 lg:flex">
                  <div className="w-full">
                    <h1 className="text-4xl font-bold lg:text-6xl">
                      <span className="text-lime-600">Nurse advice</span>{" "}
                    </h1>
                    <div className="my-4 h-2 w-20 bg-green-700"></div>
                    <p className="mb-10 text-xl">
                      The Nurse Advice Line provides health care support to the
                      beneficiaries 24/7
                    </p>
                    <div className="mx-auto flex  max-w-xl items-center justify-items-center text-center  ">
                      <div className="group relative ">
                        <div className="absolute  -inset-1 rounded-lg bg-gradient-to-r from-cyan-600 to-lime-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                        <div className="items-top   relative flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5 dark:bg-dark">
                          <Link
                            href="/nurseadvice"
                            className=" block  items-center justify-center  text-3xl transition duration-200 group-hover:text-cyan-600"
                          >
                            <h1>Nurse Advice Lines → </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-10 ">
            <div className=" mx-auto  my-10 flex flex-col items-center justify-center gap-x-10 gap-y-10 py-10 dark:bg-gray-800 lg:flex-row lg:px-2 lg:py-14">
              <div className="flex flex-col lg:w-[650px] lg:px-5 ">
                <header className="container mt-10 h-full items-center px-1 lg:mt-0 lg:flex">
                  <div className="w-full">
                    <h1 className="text-4xl font-bold lg:text-6xl">
                      <span className="text-lime-600">Emails</span>{" "}
                    </h1>
                    <div className="my-4 h-2 w-20 bg-green-700"></div>
                    <p className="mb-10 text-xl">
                      Administration, Suggestions or Concerns:
                      admin@myfamilymg.com
                    </p>
                    <p className="mb-10 text-xl">
                      Billing Inquiries: billing@myfamilymg.com
                    </p>
                    <p className="mb-10 text-xl">
                      Career Opportunities: careers@myfamilymg.com
                    </p>
                  </div>
                </header>
              </div>
              <div className="hero-image relative isolate z-10 w-full rounded-3xl md:px-5 md:pt-2 lg:w-1/2 lg:px-0 lg:pt-0">
                <Image
                  className="w-full rounded-3xl"
                  src="/images/contactus/hospsupport.jpg"
                  alt="Emails"
                  width={400}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-10 ">
            <div className=" mx-auto  my-10 flex flex-col items-center justify-center gap-x-10 gap-y-10 py-10 dark:bg-gray-800 lg:flex-row lg:px-2 lg:py-14">
              <div className="hero-image relative isolate z-10 w-full rounded-3xl md:px-5 md:pt-2 lg:w-1/2 lg:px-0 lg:pt-0">
                <Image
                  className="w-full rounded-3xl"
                  src="/images/contactus/compliance.jpg"
                  alt="Urgent Care"
                  width={400}
                  height={100}
                />
              </div>
              <div className="flex flex-col lg:w-[650px] lg:px-5 ">
                <header className="container mt-10 h-full items-center px-1 lg:mt-0 lg:flex">
                  <div className="w-full">
                    <h1 className="text-4xl font-bold lg:text-6xl">
                      <span className="text-lime-600">Compliance </span>{" "}
                    </h1>
                    <div className="my-4 h-2 w-20 bg-green-700"></div>
                   
                    <div className="mx-auto flex  max-w-xl   ">
                      <div className="group relative ">
                        <div className="items-top   relative flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5 dark:bg-dark">
                        <div className=" text-xl">
                     <p className="my-3 font-semibold text-black dark:text-white sm:text-sm lg:text-xl">Email: compliance@myfamilymg.com </p> <br/>
                     <p className="my-2 font-semibold text-black dark:text-white sm:text-sm lg:text-xl">Phone number: (909)591-6446 x 137 </p> 
                      
                    </div> 
                    <br/>
                    <p className="mb-10 text-xl">
                   
                    </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactusService;
