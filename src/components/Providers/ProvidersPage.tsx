import React from "react";
import ProvidersEducationList from "./ProvidersEducationList";
import Image from "next/image";
import "./Providers.css"
type Props = {};

const ProvidersPage = (props: Props) => {
  return (
    <div style={{ marginTop: "230px" }}>
      <div className=" container grid  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div >
          <div className="mx-auto  w-[28rem]  gap-1 rounded-lg border  border-gray-300 bg-white px-1 shadow-lg dark:bg-gray-900 profilecard" >
            <div className=" w-full items-center justify-center">
              <Image
                className="object-fill relative -top-[4rem] h-[10rem] w-[10rem] rounded-full shadow-lg outline outline-1 outline-offset-2 outline-blue-400"
                src="/images/providersphoto/Steve.jpg"
                width={300}
                height={300}
                alt="Profile Image"
              />
            </div>

            <div className="relative -top-10    h-full w-full    gap-4">
              <div>
                {" "}
                <h1 className="text-lg font-semibold uppercase dark:text-white" style={{ paddingLeft: "20px" }}>
                  Stephen A. Harvey, PA-C
                </h1>
              </div>

              <h6
                className="font-serif text-xl font-semibold capitalize text-gray-700 dark:text-gray-300"
                style={{ paddingLeft: "20px" }}
              >
                Accepting new patients
              </h6>
              <div className="items-start" style={{ paddingLeft: "20px" }}>
                <div>
                  <span className="text-xl">Languages spoken </span>{" "}
                  <span className=" bg-yellow-50 text-yellow-800 ring-yellow-600/20 inline- mx-1  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    English
                  </span>
  
                </div>
                <div className="mt-5">
                  <div className="mt-1">
                    {" "}
                    <ul className=" pb-1 text-lg">
                      <li className="space-x-3">
                      <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{display:"inline-grid"}}>
                      <path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"/><path fill="none" d="M0 0h24v24H0z"/></svg>     

                        <span className="text-gray-800 dark:text-gray-400 text-md ">
                          Charles R Drew Post Graduate School for Physician
                          Assistants{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <span className="text-xl">Associations </span> <br />
                  California Association for Physician Assistants American
                  Academy of Physician Assistants
                </div>
                <div className="mt-5 sm:w-[250px] lg:w-[400px] ">
                  <div
                    className="rounded-b border-t-4 border-cyan-600 bg-lime-50 px-4 py-3 text-teal-900"
                    role="alert"
                  >
                    <div className="">
                      <div className="py-1">
                        <svg
                          fill="#000000"
                          width="38px"
                          height="38px"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="m960 15 266.667 241.92 359.893-13.867 48.747 356.907L1920 820.547l-192 304.64 76.267 352.106-342.934 109.867-167.893 318.613L960 1769.56l-333.44 136.213-167.893-318.613-342.934-109.867L192 1125.187 0 820.547 284.693 599.96l48.747-356.907 359.893 13.867L960 15Zm0 144L764.907 335.96l-32.214 29.227-43.52-1.6-263.253-10.134-35.627 260.907-5.866 43.2-34.454 26.56-208.106 161.387L282.24 1068.44l23.253 36.693-9.28 42.667-55.68 257.387 250.774 80.426 41.493 13.334 20.373 38.506 122.667 232.96 243.84-99.52L960 1654.36l40.32 16.533 243.84 99.52 122.773-232.96 20.267-38.506 41.493-13.334 250.774-80.426-55.68-257.387-9.28-42.667 23.253-36.693 140.48-222.933-208.213-161.387-34.454-26.56-5.866-43.2-35.734-260.907-263.04 10.134-43.626 1.6-32.214-29.227L960 159Zm341.056 613.483 64.533 85.013-561.6 426.24-255.04-255.04 75.414-75.413 189.226 189.226 487.467-370.026Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-row">
                        <p className="mx-2 font-bold text-md ">Board Certified</p>
                        <p className="mx-2 text-sm">Physician Assistant</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="lg: w-[22rem] w-full  max-w-sm  lg:max-w-full">
                        {/* <div className="h-48 lg:h-auto lg:w-48  -none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div> */}
                        <div className="mt-5      justify-between  rounded-b border-b  border-l border-r bg-gray-50 p-4 leading-normal dark:bg-gray-900 dark:text-white lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
                          <div className="mb-8">
                            <div className="mb-2 text-xl font-bold text-gray-900">
                              Special Interests
                            </div>
                            <p className=" text-gray-700">
                              Family Practice, Occupational Medicine, Sports
                              Medicine, Urgent Care
                            </p>
                            <div className="mb-2 text-xl font-bold text-gray-900">
                              Other Interests and Hobbies
                            </div>
                            <p className=" text-gray-700">
                              Steve enjoys spending time with his 2 children.
                              <br />
                              Enjoys camping, Fishing, and Snow/Water skiing.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="mx-auto   w-[28rem] profilecard   gap-1 rounded-lg border border-gray-300  bg-white px-1 shadow-lg dark:bg-gray-900"
          
          >
            <div>
            <div className="  w-full items-center justify-center">
              <Image
                className="object-fill relative -top-[4rem] h-[10rem] w-[10rem] rounded-full shadow-lg outline outline-1 outline-offset-2 outline-blue-400"
                src="/images/providersphoto/patel.jpg"
                width={300}
                height={300}
                alt="Profile Image"
              />
            </div>

            <div className="relative -top-10    h-full w-full    gap-4">

             <h1 className="text-lg font-semibold uppercase dark:text-white" style={{ paddingLeft: "20px" }}>
             Avani Patel, MD
                </h1>


              <h6
                className="font-serif text-xl font-semibold capitalize text-gray-700 dark:text-gray-300"
                style={{ paddingLeft: "20px" }}
              >
                Accepting new patients
              </h6>
              <div className="items-start" style={{ paddingLeft: "20px" }}>
                <div>
                  <span className="text-xl">Languages spoken </span>{" "}
                  <span className=" bg-yellow-50 text-yellow-800 ring-yellow-600/20 inline- mx-1  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    English
                  </span>
                  <span className=" mx-1inline-  items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Spanish
                  </span>
                  <span className=" inline- mx-1  items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                    Gujarati
                  </span>
                </div>
                <div className="mt-5">
                  <ProvidersEducationList />
                </div>

                <div>
                  <span className="text-xl">Associations </span> <br />
                  Member, American College of Physicians
                </div>

                <div className="mt-5 sm:w-[250px] lg:w-[400px] ">
                  <div
                    className="rounded-b border-t-4 border-cyan-600 bg-lime-50 px-4 py-3 text-teal-900"
                    role="alert"
                  >
                    <div className=" ">
                      <div className="py-1">
                        <svg
                          fill="#000000"
                          width="38px"
                          height="38px"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m960 15 266.667 241.92 359.893-13.867 48.747 356.907L1920 820.547l-192 304.64 76.267 352.106-342.934 109.867-167.893 318.613L960 1769.56l-333.44 136.213-167.893-318.613-342.934-109.867L192 1125.187 0 820.547 284.693 599.96l48.747-356.907 359.893 13.867L960 15Zm0 144L764.907 335.96l-32.214 29.227-43.52-1.6-263.253-10.134-35.627 260.907-5.866 43.2-34.454 26.56-208.106 161.387L282.24 1068.44l23.253 36.693-9.28 42.667-55.68 257.387 250.774 80.426 41.493 13.334 20.373 38.506 122.667 232.96 243.84-99.52L960 1654.36l40.32 16.533 243.84 99.52 122.773-232.96 20.267-38.506 41.493-13.334 250.774-80.426-55.68-257.387-9.28-42.667 23.253-36.693 140.48-222.933-208.213-161.387-34.454-26.56-5.866-43.2-35.734-260.907-263.04 10.134-43.626 1.6-32.214-29.227L960 159Zm341.056 613.483 64.533 85.013-561.6 426.24-255.04-255.04 75.414-75.413 189.226 189.226 487.467-370.026Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="mx-2 font-bold">Board Certified</p>
                        <p className="mx-2 text-sm">Internal Medicine</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="lg:  w-full  max-w-sm  lg:max-w-full">
                        {/* <div className="h-48 lg:h-auto lg:w-48  -none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div> */}
                        <div className="mt-5      justify-between  rounded-b border-b  border-l border-r bg-gray-50  dark:bg-gray-900 dark:text-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
                          <div className="mb-8">
                            <div className="mb-2 text-xl font-bold text-gray-900">
                              Other Interests and Hobbies
                            </div>
                            <p className=" text-gray-700">
                              She was born and raised in Southern California,
                              <br /> enjoys spending time outdoors with family:
                              <br /> 2 children and Labrador retriever. Dr.
                              Patel and her husband enjoy gardening,
                              <br /> growing their own fruits and vegetables.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
          </div>
        </div>
        <div>
          {" "}
          <div
            
            className="mx-auto profilecard  mt-20 w-[25rem]   gap-1 rounded-lg border border-gray-300 border-gray-300 bg-white  shadow-lg dark:bg-gray-900"
          >
            <div className="  w-full items-center justify-center">
              <Image
                className="relative -top-[4rem] h-[10rem] w-[10rem] justify-center rounded-full shadow-lg outline outline-1 outline-offset-2 outline-blue-400"
                src="/images/providersphoto/Lira.jpg"
                width={100}
                height={100}
                alt="Profile Image"
              />
            </div>

            <div className="relative -top-10    h-full w-full    gap-4">
              <div className="text-center">
                {" "}
                <h1 className="text-lg font-semibold uppercase dark:text-white">
                  J. Alex Lira, MD
                </h1>
              </div>

              <h6
                className="font-serif text-xl font-semibold capitalize text-gray-700 dark:text-gray-300"
                style={{ paddingLeft: "20px" }}
              >
                Accepting new patients
              </h6>
              <div className="items-start" style={{ paddingLeft: "20px" }}>
                <div>
                  <span className="text-xl">Languages spoken </span>{" "}
                  <span className=" bg-yellow-50 text-yellow-800 ring-yellow-600/20 inline- mx-1  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    English
                  </span>
                  <span className=" mx-1inline-  items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Spanish
                  </span>
                </div>
              

                <div className="mt-5 ">
                  <div>
                    <div>
                      <div className="lg: w-[22rem] w-full  max-w-sm  lg:max-w-full">
                        {/* <div className="h-48 lg:h-auto lg:w-48  -none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div> */}
                        <div className="mt-5      justify-between  rounded-b border-b  border-l border-r bg-gray-50 p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
                          <div className="mb-8">
                            <div className="mb-2 text-xl font-bold text-gray-900">
                              More Profile Information Coming Soon!
                            </div>
                          
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
        {/* Heather Sykes, MS PA-C */}
        
        
        <div>
          <div
            className="mx-auto  mt-20   w-[28rem] profilecard   gap-1 rounded-lg border border-gray-300  bg-white px-1 shadow-lg dark:bg-gray-900"
          
          >
            <div>
            <div className="  w-full items-center justify-center">
              <Image
                className="object-fill relative -top-[4rem] h-[10rem] w-[10rem] rounded-full shadow-lg outline outline-1 outline-offset-2 outline-blue-400"
                src="/images/providersphoto/sampledoc1.jpg"
                width={300}
                height={300}
                alt="Profile Image"
              />
            </div>

            <div className="relative -top-10    h-full w-full    gap-4">

             <h1 className="text-lg font-semibold uppercase dark:text-white" style={{ paddingLeft: "20px" }}>
             Heather Sykes, MS PA-C
                </h1>
              

              <h6
                className="font-serif text-xl font-semibold capitalize text-gray-700 dark:text-gray-300"
                style={{ paddingLeft: "20px" }}
              >
                Accepting new patients
              </h6>
              <div className="items-start" style={{ paddingLeft: "20px" }}>
                <div>
                  <span className="text-xl">Languages spoken </span>{" "}
                  <span className=" bg-yellow-50 text-yellow-800 ring-yellow-600/20 inline- mx-1  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    English
                  </span>
                  {/* <span className=" mx-1inline-  items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Spanish
                  </span>
                  <span className=" inline- mx-1  items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                    Gujarati
                  </span> */}
                </div>
                <div className="mt-5">
                <div className='mt-1'>            <ul className=" text-lg pb-1">
    <li className="flex space-x-3">
    <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"/><path fill="none" d="M0 0h24v24H0z"/></svg>     

      <span className="text-gray-800 dark:text-gray-400">
      Bachelor of Arts, Psychology (UC Riverside)
      </span>
    </li>
  
    <li className="flex space-x-3">
      
      <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"/><path fill="none" d="M0 0h24v24H0z"/></svg>     

      <span className="text-gray-800 dark:text-gray-400">
      Master of Science in Physician Assistant Studies 
      <br/>
      <p className="text-xs">(Western University of Health Sciences)</p>
      </span>
    </li>
  
    
  </ul>
          </div>
                </div>

                

                <div className="mt-5 sm:w-[250px] lg:w-[400px] ">
                  <div
                    className="rounded-b border-t-4 border-cyan-600 bg-lime-50 px-4 py-3 text-teal-900"
                    role="alert"
                  >
                    <div className=" ">
                      <div className="py-1">
                        <svg
                          fill="#000000"
                          width="38px"
                          height="38px"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m960 15 266.667 241.92 359.893-13.867 48.747 356.907L1920 820.547l-192 304.64 76.267 352.106-342.934 109.867-167.893 318.613L960 1769.56l-333.44 136.213-167.893-318.613-342.934-109.867L192 1125.187 0 820.547 284.693 599.96l48.747-356.907 359.893 13.867L960 15Zm0 144L764.907 335.96l-32.214 29.227-43.52-1.6-263.253-10.134-35.627 260.907-5.866 43.2-34.454 26.56-208.106 161.387L282.24 1068.44l23.253 36.693-9.28 42.667-55.68 257.387 250.774 80.426 41.493 13.334 20.373 38.506 122.667 232.96 243.84-99.52L960 1654.36l40.32 16.533 243.84 99.52 122.773-232.96 20.267-38.506 41.493-13.334 250.774-80.426-55.68-257.387-9.28-42.667 23.253-36.693 140.48-222.933-208.213-161.387-34.454-26.56-5.866-43.2-35.734-260.907-263.04 10.134-43.626 1.6-32.214-29.227L960 159Zm341.056 613.483 64.533 85.013-561.6 426.24-255.04-255.04 75.414-75.413 189.226 189.226 487.467-370.026Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="mx-2 font-bold">Board Certified</p>
                        <p className="mx-2 text-sm">N.C.C.P.A Certification (National Commission on Certification of Physicians Assistants) <br/>
California Physician Assistant License
</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="lg:  w-full  max-w-sm  lg:max-w-full">
                        {/* <div className="h-48 lg:h-auto lg:w-48  -none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div> */}
                        <div className="mt-5      justify-between  rounded-b border-b  border-l border-r bg-gray-50  dark:bg-gray-900 dark:text-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
                          <div className="mb-8">
                            <div className="mb-2 text-xl font-bold text-gray-900">
                              Other Interests and Hobbies
                            </div>
                            <p className=" text-gray-700">
                            I mostly enjoy spending time with my family.
                            Together we like traveling and visiting new places.
                             I also enjoy camping, skiing, and beach days. 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
           
          </div>
        </div>

        {/* {Nayan Shah} */}
        <div>
          {" "}
          <div
            
            className="mx-auto profilecard  mt-20 w-[25rem]   gap-1 rounded-lg border border-gray-300 border-gray-300 bg-white  shadow-lg dark:bg-gray-900"
          >
            <div className="  w-full items-center justify-center">
              <Image
                className="relative -top-[4rem] h-[10rem] w-[10rem] justify-center rounded-full shadow-lg outline outline-1 outline-offset-2 outline-blue-400"
                src="/images/providersphoto/sampledoc1.jpg"
                width={300}
                height={300}
                alt="Profile Image"
              />
            </div>

            <div className="relative -top-10    h-full w-full    gap-4">
              <div>
                {" "}
                <h1 className="text-lg font-semibold uppercase dark:text-white" style={{ paddingLeft: "20px" }}>
                Nayan Shah, MD, 
                </h1>
              </div>

              <h6
                className="font-serif text-xl font-semibold capitalize text-gray-700 dark:text-gray-300"
                style={{ paddingLeft: "20px" }}
              >
                Accepting new patients
              </h6>
              <div className="items-start" style={{ paddingLeft: "20px" }}>
                <div>
                  <span className="text-xl">Languages spoken </span>{" "}
                  <span className=" bg-yellow-50 text-yellow-800 ring-yellow-600/20 inline- mx-1  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    English
                  </span>
                  {/* <span className=" mx-1inline-  items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Spanish
                  </span> */}
                </div>
              

                <div className="mt-5 ">
                  <div>
                    <div>
                      <div className="lg: w-[22rem] w-full  max-w-sm  lg:max-w-full">
                        {/* <div className="h-48 lg:h-auto lg:w-48  -none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div> */}
                        <div className="mt-5      justify-between  rounded-b border-b  border-l border-r bg-gray-50 p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
                          <div className="mb-8">
                            <div className="mb-2 mr-5 text-xl font-bold text-gray-900">
                              More Profile Information Coming Soon!
                            </div>
                          
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div
            
            className="mx-auto profilecard  mt-20 w-[25rem]   gap-1 rounded-lg border border-gray-300 border-gray-300 bg-white  shadow-lg dark:bg-gray-900"
          >
            <div className="  w-full items-center justify-center">
              <Image
                className="relative -top-[4rem] h-[10rem] w-[10rem] justify-center rounded-full shadow-lg outline outline-1 outline-offset-2 outline-blue-400"
                src="/images/providersphoto/sampledoc1.jpg"
                width={300}
                height={300}
                alt="Profile Image"
              />
            </div>

            <div className="relative -top-10    h-full w-full    gap-4">
              <div>
                {" "}
                <h1 className="text-lg font-semibold uppercase dark:text-white" style={{ paddingLeft: "20px" }}>
                Jessica Cifuentes NP-C
                </h1>
              </div>

              <h6
                className="font-serif text-xl font-semibold capitalize text-gray-700 dark:text-gray-300"
                style={{ paddingLeft: "20px" }}
              >
                Accepting new patients
              </h6>
              <div className="items-start" style={{ paddingLeft: "20px" }}>
                <div>
                  <span className="text-xl">Languages spoken </span>{" "}
                  <span className=" bg-yellow-50 text-yellow-800 ring-yellow-600/20 inline- mx-1  items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset">
                    English
                  </span>
                  {/* <span className=" mx-1inline-  items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Spanish
                  </span> */}
                </div>
              

                <div className="mt-5 ">
                  <div>
                    <div>
                      <div className="lg: w-[22rem] w-full  max-w-sm  lg:max-w-full">
                        {/* <div className="h-48 lg:h-auto lg:w-48  -none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div> */}
                        <div className="mt-5  mr-5    justify-between  rounded-b border-b  border-l border-r bg-gray-50 p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t">
                          <div className="mb-8">
                            <div className="mb-2 text-xl font-bold text-gray-900">
                              More Profile Information Coming Soon!
                            </div>
                          
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersPage;
