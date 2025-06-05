import React from 'react'
import "./Holidayhours.css"
type Props = {}

// id: 1,
// name: "Good Friday-half day",
// blockDate:"29th",
// blockMonth:"March, 2024",
// date: "03/29/2024 ",
// day: "Friday",

const HolidayHours = ({feature}: any) => {
  const { name, blockDate,blockMonth,date,day } = feature;
  return (
    <div >  
      <div className="p-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 dark:bg-gray-dark dark:text-white" >
    <div className=" flex items-center">
        <div className="holidaybtn">
        <p className="text-4xl font-bold text-white">{blockDate}</p>
        <p className="text-sm text-white">{blockMonth}</p>
        </div>
        <div className="ml-4">
        <div className="uppercase tracking-wide text-sm text-lime-600 font-semibold">{day}</div>
        <p className="mt-2 text-gray-500">{name}</p>
        <p className="mt-2 text-gray-500">{date}</p>
        </div>
    </div>
    </div></div>

    
  )
}

export default HolidayHours