import React from "react";
import cardFormsData from "./CardFormsData";
type Props = {};

const CardForms = (props: Props) => {
  return (
    <div className=" sm:mt-12 dark:bg-gray-900 ">
      <div className="lg:px-30  mx-auto  bg-slate-50 p-6 dark:bg-gray-900 sm:px-8">
        <div className=" mt-10 text-3xl  container text-center">
       
        <h3>
        Please print out these forms and bring a completed copy to your first appointment to speed up the registration process for new patients.
        </h3>
        </div>
        <div className="mx-auto my-16 grid w-fit grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {cardFormsData.map((card,i) => {
            return (
              <div key={i}> <div className="dark:bg-shadesOfBlue hover:ring-shadesOfBlue group relative m-4 w-64 transform rounded-lg bg-white dark:bg-gray-800 shadow-md duration-500 hover:scale-105 hover:shadow-xl hover:ring dark:hover:ring-white" style={{height: "20rem"}}>
              <div className="bg-shadesOfBlue dark:group-hover:bg-shadesOfBlue absolute -inset-y-14 left-0 right-0 mx-auto flex h-28 w-28 transform items-center justify-center rounded-full border-4 border-cyan-600 duration-300 group-hover:bg-white group-hover:shadow-md dark:border-slate-800">
                <span className="group-hover:text-shadesOfBlue transform text-3xl text-white duration-300 dark:text-slate-800 dark:group-hover:text-white md:text-5xl">
                  <svg
                    height="80px"
                    width="80px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-30.32 -30.32 363.83 363.83"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                     
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <polygon
                          style={{ fill: "#E8E8E8" }}
                          points="219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525 "
                        ></polygon>{" "}
                        <path
                          style={{ fill: "#FB3449" }}
                          d="M230.013,149.935c-3.643-6.493-16.231-8.533-22.006-9.451c-4.552-0.724-9.199-0.94-13.803-0.936 c-3.615-0.024-7.177,0.154-10.693,0.354c-1.296,0.087-2.579,0.199-3.861,0.31c-1.314-1.36-2.584-2.765-3.813-4.202 c-7.82-9.257-14.134-19.755-19.279-30.664c1.366-5.271,2.459-10.772,3.119-16.485c1.205-10.427,1.619-22.31-2.288-32.251 c-1.349-3.431-4.946-7.608-9.096-5.528c-4.771,2.392-6.113,9.169-6.502,13.973c-0.313,3.883-0.094,7.776,0.558,11.594 c0.664,3.844,1.733,7.494,2.897,11.139c1.086,3.342,2.283,6.658,3.588,9.943c-0.828,2.586-1.707,5.127-2.63,7.603 c-2.152,5.643-4.479,11.004-6.717,16.161c-1.18,2.557-2.335,5.06-3.465,7.507c-3.576,7.855-7.458,15.566-11.815,23.02 c-10.163,3.585-19.283,7.741-26.857,12.625c-4.063,2.625-7.652,5.476-10.641,8.603c-2.822,2.952-5.69,6.783-5.941,11.024 c-0.141,2.394,0.807,4.717,2.768,6.137c2.697,2.015,6.271,1.881,9.4,1.225c10.25-2.15,18.121-10.961,24.824-18.387 c4.617-5.115,9.872-11.61,15.369-19.465c0.012-0.018,0.024-0.036,0.037-0.054c9.428-2.923,19.689-5.391,30.579-7.205 c4.975-0.825,10.082-1.5,15.291-1.974c3.663,3.431,7.621,6.555,11.939,9.164c3.363,2.069,6.94,3.816,10.684,5.119 c3.786,1.237,7.595,2.247,11.528,2.886c1.986,0.284,4.017,0.413,6.092,0.335c4.631-0.175,11.278-1.951,11.714-7.57 C231.127,152.765,230.756,151.257,230.013,149.935z M119.144,160.245c-2.169,3.36-4.261,6.382-6.232,9.041 c-4.827,6.568-10.34,14.369-18.322,17.286c-1.516,0.554-3.512,1.126-5.616,1.002c-1.874-0.11-3.722-0.937-3.637-3.065 c0.042-1.114,0.587-2.535,1.423-3.931c0.915-1.531,2.048-2.935,3.275-4.226c2.629-2.762,5.953-5.439,9.777-7.918 c5.865-3.805,12.867-7.23,20.672-10.286C120.035,158.858,119.587,159.564,119.144,160.245z M146.366,75.985 c-0.602-3.514-0.693-7.077-0.323-10.503c0.184-1.713,0.533-3.385,1.038-4.952c0.428-1.33,1.352-4.576,2.826-4.993 c2.43-0.688,3.177,4.529,3.452,6.005c1.566,8.396,0.186,17.733-1.693,25.969c-0.299,1.31-0.632,2.599-0.973,3.883 c-0.582-1.601-1.137-3.207-1.648-4.821C147.945,83.048,146.939,79.482,146.366,75.985z M163.049,142.265 c-9.13,1.48-17.815,3.419-25.979,5.708c0.983-0.275,5.475-8.788,6.477-10.555c4.721-8.315,8.583-17.042,11.358-26.197 c4.9,9.691,10.847,18.962,18.153,27.214c0.673,0.749,1.357,1.489,2.053,2.22C171.017,141.096,166.988,141.633,163.049,142.265z M224.793,153.959c-0.334,1.805-4.189,2.837-5.988,3.121c-5.316,0.836-10.94,0.167-16.028-1.542 c-3.491-1.172-6.858-2.768-10.057-4.688c-3.18-1.921-6.155-4.181-8.936-6.673c3.429-0.206,6.9-0.341,10.388-0.275 c3.488,0.035,7.003,0.211,10.475,0.664c6.511,0.726,13.807,2.961,18.932,7.186C224.588,152.585,224.91,153.321,224.793,153.959z"
                        ></path>{" "}
                        <polygon
                          style={{ fill: "#FB3449" }}
                          points="227.64,25.263 32.842,25.263 32.842,0 219.821,0 "
                        ></polygon>{" "}
                        <g>
                          {" "}
                          <path
                            style={{ fill: "#A4A9AD" }}
                            d="M126.841,241.152c0,5.361-1.58,9.501-4.742,12.421c-3.162,2.921-7.652,4.381-13.472,4.381h-3.643 v15.917H92.022v-47.979h16.606c6.06,0,10.611,1.324,13.652,3.971C125.321,232.51,126.841,236.273,126.841,241.152z M104.985,247.387h2.363c1.947,0,3.495-0.546,4.644-1.641c1.149-1.094,1.723-2.604,1.723-4.529c0-3.238-1.794-4.857-5.382-4.857 h-3.348C104.985,236.36,104.985,247.387,104.985,247.387z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#A4A9AD" }}
                            d="M175.215,248.864c0,8.007-2.205,14.177-6.613,18.509s-10.606,6.498-18.591,6.498h-15.523v-47.979 h16.606c7.701,0,13.646,1.969,17.836,5.907C173.119,235.737,175.215,241.426,175.215,248.864z M161.76,249.324 c0-4.398-0.87-7.657-2.609-9.78c-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939,0,6.826-1.143,8.664-3.43 C160.841,257.523,161.76,254.028,161.76,249.324z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#A4A9AD" }}
                            d="M196.579,273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374 L196.579,273.871L196.579,273.871z"
                          ></path>{" "}
                        </g>{" "}
                        <polygon
                          style={{ fill: "#D1D3D3" }}
                          points="219.821,50.525 270.346,50.525 219.821,0 "
                        ></polygon>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center p-4">
                <div>
                  <h2 className="text-shadesOfBlue my-1 my-8 font-bold capitalize dark:text-white">
                    {card.question}
                  </h2>
                </div>
                <div>
                  <p className="text-center text-base dark:text-white"></p>
                </div>
                <a
                  className="border-shadesOfBlue  text-shadesOfBlue group-hover:bg-shadesOfBlue bottom-0 mt-4 flex transform rounded-md border-2 p-2 px-6 font-semibold capitalize opacity-85 delay-75 ease-in-out hover:opacity-100 group-hover:text-lime-600 dark:border-lime-600 dark:text-white dark:group-hover:bg-slate-800"
                  href={card.link}
                  type={card.type}
                >
                  Download
                </a>
              </div>
            </div> </div>
             
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default CardForms;
