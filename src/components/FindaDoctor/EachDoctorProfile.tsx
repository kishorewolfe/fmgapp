import React from "react";
import LanguagesSpoken from "./LanguagesSpoken";
import Image from "next/image";
import "./EachDoctorProfile.css";
import { Metadata } from "next";
import { AddressCard, AddressCardNormal } from "./AddressIcon";
import { PhoneIcon, PhoneIconNormal } from "./PhoneIcon";
import { FaxIcon, FaxIconNormal } from "./FaxIcon";
type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
};

const EachDoctorProfile = (props) => {
  let { doctor } = props;
  let docName =
    doctor[0]?.FirstName + " " + doctor[0]?.LastName + " " + doctor[0]?.Degree1;
  let address: any;
  let cityLine;
  let address1: any = "";
  let cityLine1;
  let cityLine2;

  let phone_number = doctor[0]?.Phone;
  let fax_number = doctor[0]?.Fax;
  let phone_number1 = doctor[0]?.Phone1;
  let fax_number1 = doctor[0]?.Fax1;
  let phone_number2 = doctor[0]?.Phone2;
  let fax_number2 = doctor[0]?.Fax2;
  let addressTwo = doctor[0]?.StreetAddress1;
  let address2: any = "";


  if (doctor[0]?.StreetAddress !== ""   && doctor[0]?.City !== ""&& doctor[0]?.State !== "") {
    if(doctor[0]?.Suite!==""){
    address = `${doctor[0]?.StreetAddress}, ${doctor[0]?.Suite},`;
    cityLine = `${doctor[0]?.City}, ${doctor[0]?.State} ${doctor[0]?.Zip}.`;
    }
    else{
    address = `${doctor[0]?.StreetAddress},`;
    cityLine = `${doctor[0]?.City}, ${doctor[0]?.State} ${doctor[0]?.Zip}.`;

    }
  }
  if (doctor[0]?.StreetAddress1 !== "" && doctor[0]?.City1 !== ""&& doctor[0]?.State1 !== "") {
      address1 = `${doctor[0]?.StreetAddress1}, ${doctor[0]?.Suite1}`;
      cityLine1 = `${doctor[0]?.City1}, ${doctor[0]?.State1} ${doctor[0]?.Zip1}.`;
    
  }

  if (doctor[0]?.StreetAddress2 !== "" && doctor[0]?.City2 !== ""&& doctor[0]?.State2 !== "") {
    address2 = `${doctor[0]?.StreetAddress2}, ${doctor[0]?.Suite2}`;
    cityLine2 = `${doctor[0]?.City2}, ${doctor[0]?.State2} ${doctor[0]?.Zip2}.`;
  }

  let phNum = "tel:" + doctor[0]?.Phone;
const Langs = [];

const language1 = doctor[0]?.Language1?.trim();
const language2 = doctor[0]?.Language2?.trim();
const language3 = doctor[0]?.Language3?.trim();



if (language1 ) {
  Langs.push("English");
  if(doctor[0]?.Language1!=="English"){
    Langs.push(language1);
  }
 
}

if (language2) {
  Langs.push(language2);
}

if (language3) {
  Langs.push(language3);
}

if(!language1 && !language2 && !language3){
  Langs.push("NOT AVAILABLE")

}
 const fullAddress = `${address1}, ${cityLine1}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="xs:mt-[20px] lg:mt-[120px]" style={{ marginTop: "140px" }}>
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className=" flex  items-start  justify-start gap-2 sm:ml-[10rem] md:ml-[18rem]">
          <a
            href="/find_doctor"
            className="mt-8  inline-flex items-center rounded-md border border-lime-600 px-3 py-1.5 text-lime-600 hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            <span className="ml-1 text-lg font-bold">Back</span>
          </a>{" "}
        </div>
<div className="container mx-auto py-8">
  <div className="flex flex-col sm:flex-row gap-4 px-4">
    <div className="w-full sm:w-1/3 dark:bg-slate-800 dark:text-white p-4 shadow-md bg-white">
              <div className="rounded-lg  p-6  ">
                <div className="flex flex-col items-center">
                  <Image
                    src={doctor[0]?.image_url}
                    className="mb-4 h-64 w-64 shrink-0 rounded-full bg-gray-300 object-contain"
                    alt="Doctor"
                    width={150}
                    height={250}
                  ></Image>
                  <h1 className="text-md font-bold">{docName}</h1>
                  <p className="text-lime-600">
                    {doctor[0]?.ContractedSpecialty}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                      href={phNum}
                      className="rounded bg-cyan-600 px-4 py-2 text-white hover:bg-lime-600 "
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="md:text-md mb-2 font-bold uppercase tracking-wider text-gray-500 sm:text-sm lg:text-lg lg:text-lg">
                    Degree
                  </span>
                  <h6>{doctor[0]?.Degree1}</h6>
                </div>

                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="mb-2 font-bold uppercase tracking-wider text-gray-500">
                    Languages
                  </span>
                  <LanguagesSpoken languages={Langs} />
                </div>
              </div>
            </div>
                <div className="w-full sm:w-2/3 shadow-md dark:bg-slate-800 bg-white dark:text-white p-4 m:text-sm md:text-lg lg:text-lg">
              <div className="rounded-lg  p-6  ">
                <div className="pb-10 my-auto flex w-full flex-col justify-center gap-2 py-6 sm:text-sm md:text-lg lg:text-lg">
                  <div className="flex w-full justify-center gap-2 xs:flex-col sm:flex-row ">
                    <div className="w-full">
                      <dl className="  text-gray-900  dark:text-white">
                        <div className="md:text-md flex flex-col pb-3 sm:text-sm lg:text-lg">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 md:text-lg lg:text-lg">
                            FIRST NAME
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.FirstName}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 sm:text-sm md:text-lg lg:text-lg">
                            LAST NAME
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.LastName}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="w-full  dark:bg-slate-800 dark:text-white sm:text-sm md:text-lg lg:text-lg">
                      <dl className=" text-gray-900  dark:text-white sm:text-sm md:text-lg lg:text-lg">
                        <div className="flex flex-col pb-3 sm:text-sm md:text-lg lg:text-lg">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 sm:text-sm md:text-lg lg:text-lg">
                            SPECIALITY
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.ContractedSpecialty}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 sm:text-sm md:text-lg lg:text-lg">
                            ORGANIZATION
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Practice_Name}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    
                  </div>
                   <div className="flex w-full justify-center gap-2 xs:flex-col sm:flex-row ">
                    <div className="w-full">
                      <dl className="  text-gray-900  dark:text-white">
                        <div className="md:text-md flex flex-col pb-3 sm:text-sm lg:text-lg">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 md:text-lg lg:text-lg">
                            CITY
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.City}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 sm:text-sm md:text-lg lg:text-lg">
                            STATE
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.State}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="w-full  dark:bg-slate-800 dark:text-white sm:text-sm md:text-lg lg:text-lg">
                      <dl className=" text-gray-900  dark:text-white sm:text-sm md:text-lg lg:text-lg">
                        <div className="flex flex-col pb-3 sm:text-sm md:text-lg lg:text-lg">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 sm:text-sm md:text-lg lg:text-lg">
                            ZIP CODE
                          </dt>
                          <dd className="text-lg font-semibold">
                            {doctor[0]?.Zip}
                          </dd>
                        </div>
                        <div className="flex flex-col py-3">
                          <dt className="mb-1 text-gray-500 dark:text-gray-300 sm:text-sm md:text-lg lg:text-lg">
                            COUNTRY
                          </dt>
                          <dd className="text-lg font-semibold">
                           United States
                          </dd>
                        </div>
                      </dl>
                    </div>
                    
                  </div>
                  
                  



                  <span className="mb-1 text-lime-600 dark:text-lime-600 sm:text-sm md:text-lg lg:text-lg">
                    ADDRESS
                  </span>
                  <div className="w-full rounded-md border border-white p-2 dark:bg-slate-800 dark:text-white sm:text-sm md:text-lg lg:text-lg">
                    <div className="flex flex-col">
                      <div className="address1 flex items-start gap-4 rounded-md p-4 shadow-md">
                        <div className="md:text-md space-y-2 text-black dark:text-white">
                          {/* Address + CityLine section aligned with icon */}
                          <div className="flex items-start gap-2">
                           
                             <>
                              <span className=" hidden dark:block">
                                 <AddressCard className="mt-1" />
                              </span>

                              <span className=" block dark:hidden">
                                <AddressCardNormal className="mt-1" />
                              </span>
                            </>
<a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${cityLine}`)}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <div style={{ cursor: 'pointer' }}>
    <p>{address}</p>
    <p>{cityLine}</p>
  </div>
</a>                      </div>

                          {/* Phone section */}
                          <div className="flex items-center gap-2">
                            <>
                              <span className=" hidden dark:block">
                                <PhoneIcon className="h-4 w-4" />
                              </span>

                              <span className=" block dark:hidden">
                                <PhoneIconNormal className="h-4 w-4 " />
                              </span>
                            </>

                            <span>{phone_number}</span>
                          </div>

                          {/* Fax section */}
                          <div className="flex items-center gap-2">
                            <>
                                  <span className=" hidden dark:block">
                                    <FaxIcon className="h-4 w-4 text-gray-500" />
                                  </span>

                                  <span className="block dark:hidden">
                                    <FaxIconNormal className="h-4 w-4 " />{" "}
                                  </span>
                                </>
                            <span>{fax_number}</span>
                          </div>
                        </div>
                      </div>

                      {address1 !== "" && (
                        <>
                          <hr />
                          <div className="address1 flex items-start gap-4 rounded-md p-4 shadow-md">
                            <div className="md:text-md space-y-2 text-black dark:text-white">
                              {/* Address + CityLine section aligned with icon */}
                              <div className="flex items-start gap-2">
                                <>
                              <span className=" hidden dark:block">
                                 <AddressCard className="mt-1" />
                              </span>

                              <span className=" block dark:hidden">
                                <AddressCardNormal className="mt-1" />
                              </span>
                            </>
<a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address1}, ${cityLine1}`)}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <div style={{ cursor: 'pointer' }}>
    <p>{address1}</p>
    <p>{cityLine1}</p>
  </div>
</a>                      </div>

                              {/* Phone section */}
                              <div className="flex items-center gap-2">
                                <>
                                  <span className=" hidden dark:block">
                                    <PhoneIcon className="h-4 w-4" />
                                  </span>

                                  <span className=" block dark:hidden">
                                    <PhoneIconNormal className="h-4 w-4 " />
                                  </span>
                                </>

                                <span>{phone_number1}</span>
                              </div>

                              {/* Fax section */}
                              <div className="flex items-center gap-2">
                                <>
                                  <span className=" hidden dark:block">
                                    <FaxIcon className="h-4 w-4 text-gray-500" />
                                  </span>

                                  <span className="block dark:hidden">
                                    <FaxIconNormal className="h-4 w-4 " />{" "}
                                  </span>
                                </>
                                <span>{fax_number1}</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {address2 !== "" && (
                        <>
                          <hr />
                          <div className="address1 flex items-start gap-4 rounded-md p-4 shadow-md">
                            <div className="md:text-md space-y-2 text-black dark:text-white">
                              {/* Address + CityLine section aligned with icon */}
                              <div className="flex items-start gap-2">
                                 <>
                              <span className=" hidden dark:block">
                                 <AddressCard className="mt-1" />
                              </span>

                              <span className=" block dark:hidden">
                                <AddressCardNormal className="mt-1" />
                              </span>
                            </>
                               <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address2}, ${cityLine2}`)}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <div style={{ cursor: 'pointer' }}>
    <p>{address2}</p>
    <p>{cityLine2}</p>
  </div>
</a>   
                              </div>

                              {/* Phone section */}
                              <div className="flex items-center gap-2">
                                <>
                                  <span className=" hidden dark:block">
                                    <PhoneIcon className="h-4 w-4" />
                                  </span>

                                  <span className=" block dark:hidden">
                                    <PhoneIconNormal className="h-4 w-4 " />
                                  </span>
                                </>

                                <span>{phone_number2}</span>
                              </div>

                              {/* Fax section */}
                              <div className="flex items-center gap-2">
                                <>
                                  <span className=" hidden dark:block">
                                    <FaxIcon className="h-4 w-4 text-gray-500" />
                                  </span>

                                  <span className="block dark:hidden">
                                    <FaxIconNormal className="h-4 w-4 " />{" "}
                                  </span>
                                </>
                                <span>{fax_number2}</span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
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

export default EachDoctorProfile;


