import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family MG",
  description: "Family MG",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Privacy Policy
                </h2>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Below are the privacy policies of My Family Medical Group
                    both for this website and for personal health information.
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
                  <h4 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    Personal Health Information
                  </h4>

                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Notice regarding My Family Medical Group and the Health
                    Insurance Portability and Accountability Act of 1996 (HIPAA)
                  </p>
                  <section className="justify-center bg-gray-50 text-gray-600 antialiased  dark:bg-gray-800 ">
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
                              <Link href={"/npp"}> <h2 className="mb-1 truncate text-2xl font-extrabold  leading-snug  text-black dark:text-white sm:mb-0">
                                  Notice of Privacy Practices
                                </h2></Link>
                              </div>

                              <div className="flex items-end justify-between whitespace-normal">
                                <div className="max-w-md text-black dark:text-white ">
                                  <p className="mb-2 text-body-color ">
                                    Your Information. Your Rights. Our
                                    Responsibilities
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
            
                 <section className="mt-2 mb-8 justify-center bg-gray-50 text-gray-600  antialiased dark:bg-gray-800">
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
                              <Link href={"/hipaafaq"}>
                                <h2 className="mb-1 truncate text-2xl font-extrabold  leading-snug  text-black dark:text-white sm:mb-0">
                                  HIPAA Frequently Asked Questions
                                </h2></Link>
                              </div>

                              <div className="flex items-end justify-between whitespace-normal">
                                <div className="max-w-md text-black dark:text-white ">
                                  <p className="mb-2 text-body-color ">
                                    HIPAA stands for Health Insurance
                                    Portability and Accountability Act of 1996
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
               

                  <div className="mt-4">
                    <h3 className="font-xl mb-5 font-bold leading-tight text-black dark:text-white sm:text-sm sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Our Website Privacy Policies
                    </h3>

                    <p className="mb-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      We make the following assurances of privacy for visitors
                      to our website:
                    </p>
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        The My Family Medical Group website is designed to
                        provide useful information about our program and to
                        connect users with physicians, facilities and services
                        within My Family Medical Group.
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Our website does not promote or sell products of any
                        kind. We do hope that the information provided
                        encourages the visitor to consider using My Family
                        Medical Group for medical care, or that visitors might
                        decide to join our organization as an employee or
                        volunteer.
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        We keep track of visits to our website via an automatic
                        monitoring program that tells us, among other things,
                        how many visits are made to the site; the time of day
                        and date of those visits; and the areas visited. This
                        information is used to evaluate the effectiveness of our
                        site and the effectiveness of any promotion of our site.
                        It helps us answer questions such as these: Are we
                        providing information on our website that is useful?
                        Which information is most useful? How have we made you
                        aware that our website exists?
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        The monitoring program does not provide us with any
                        personal information about a visitor. We cannot discern
                        the name, address or any other personal information
                        about visitors to our site.
                      </li>
                      <li className="mb-4 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        If we wish to gather such personal information, it will
                        be requested via a form on the site that the user
                        voluntarily completes and submits. The form will
                        describe the way in which the information will be used.
                      </li>
                    </ul>
                  </div>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-cyan-600 bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <h6 className="text-center text-base font-bold italic text-body-color">
                      Our Health Information
                    </h6>
                    <p className="text-center text-base font-medium italic text-body-color">
                      All health-related information provided via our site is
                      intended to educate and inform visitors about illnesses
                      and conditions and ways to maintain optimum health. It is
                      not intended to diagnose personal physical conditions and
                      is not a substitute for consulting with ones own personal
                      health care provider.
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

export default BlogDetailsPage;
