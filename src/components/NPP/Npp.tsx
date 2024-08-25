"use client";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import NppList from "./NppList";

export const metadata: Metadata = {
  title: "Family MG",
  description: "Family MG",
};

const Npp = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Notice of Privacy Practices
                </h2>
                <h6 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Your Information. Your Rights. Our Responsibilities.
                </h6>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    This notice describes how medical information about you may
                    be used and disclosed and how you can get access to this
                    information. Please review it carefully.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/privacy/health.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Your Rights
                    </h3>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      You have the right to:
                    </p>
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Get a copy of your paper or electronic medical record
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Correct your paper or electronic medical record
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Request confidential communication
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Ask us to limit the information we share
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Get a list of those with whom we’ve shared your
                        information
                      </li>

                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Get a copy of this privacy notice
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Choose someone to act for you
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        File a complaint if you believe your privacy rights have
                        been violated
                      </li>
                    </ul>
                  </div>
                  <section className="mb-8 mt-2 justify-center bg-gray-50 text-gray-600  antialiased dark:bg-gray-800">
                    <div className="h-full">
                      <div className="max-w mx-aut rounded-lg shadow-lg hover:bg-lime-200 ">
                        <div className="px-6 py-5">
                          <div className="flex items-start">
                            <svg
                              className="mr-5 flex-shrink-0 fill-current"
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                            >
                              <path
                                className="text-indigo-300"
                                d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                              />
                              <path
                                className="text-indigo-200"
                                d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                              />
                              <path
                                className="text-indigo-500"
                                d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                              />
                            </svg>

                            <div className="flex-grow truncate">
                              <div className="mb-3 w-full items-center justify-between sm:flex">
                                <h2 className="mb-1 truncate text-2xl font-extrabold  leading-snug  text-black dark:text-white sm:mb-0">
                                  For more information visit:
                                </h2>
                              </div>

                              <div className="flex items-end justify-between whitespace-normal">
                                <div className="max-w-md text-black dark:text-white ">
                                  <p className="mb-2 text-body-color ">
                                    www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html
                                  </p>
                                </div>

                                <a
                                  className="ml-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-red-50 to-indigo-100 text-indigo-600 transition duration-150 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white"
                                  href="#0"
                                >
                                  <span className="block font-bold">
                                    <span className="sr-only">Read more</span>{" "}
                                    {"->"}{" "}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div>
                    <div className="mt-4">
                      <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                        My Family Medical Group Uses and Disclosures
                      </h3>

                      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        We may use and share your information as we:
                      </p>

                      <ul className="mb-10 list-inside list-disc text-body-color">
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Treat you
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Run our organization
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Bill for your services
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Ask us to limit the information we share
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Help with public health and safety issues
                        </li>

                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Do research
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Comply with the law
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Respond to organ and tissue donation requests
                        </li>

                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Work with a medical examiner or funeral director
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Address workers’ compensation, law enforcement, and
                          other government requests
                        </li>
                        <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                          Respond to lawsuits and legal actions
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                      When it comes to your health information, you have certain
                      rights. This section explains your rights and some of our
                      responsibilities to help you.
                    </h2>
                    <div>
                      <NppList />
                    </div>
                  </div>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <h6 className="text-center text-base font-bold italic text-body-color">
                      Changes to the Terms of this Notice
                    </h6>
                    <p className="text-center text-base font-medium italic text-body-color">
                      We can change the terms of this notice at any time. If any
                      changes are made, new notices will be available upon
                      request in our office and on our web site.
                    </p>
                  </div>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <h6 className="text-center text-base font-bold italic text-body-color">
                      Other Instructions for Notice
                    </h6>
                    <p className="text-center text-base font-medium italic text-body-color">
                      Please note that we never market or sell personal
                      information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Npp;
