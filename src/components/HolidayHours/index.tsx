import React from 'react'
import "./Holidayhours.css"
type Props = {}

// id: 1,
// name: "Good Friday-half day",
// blockDate:"29th",
// blockMonth:"March, 2024",
// date: "03/29/2024 ",
// day: "Friday",

const HolidayHours = ({ feature }: any) => {
  const { name, blockDate, blockMonth } = feature;

  return (
    <div>
      <div className="p-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 dark:bg-gray-dark dark:text-white">
        <div className="flex items-center">
          <div className="holidaybtn">
            <p className="text-sm  text-white">{blockDate}</p>
            <p className="text-md font-semibold text-white">{blockMonth}</p>
          </div>

          <div className="ml-4">
            <p className="text-lg font-semibold">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayHours;
