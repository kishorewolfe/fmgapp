
import HolidayHours from '@/components/HolidayHours'
import HolidayData from '@/components/HolidayHours/HolidayData'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='mt-40 mb-10 bg-slate-50 dark:bg-gray-900'>
      <div className='justify-center text-center'>
      <h1 className=" my-10 text-7xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
            Holiday Hours
        </h1>
      </div>
      
     
           {HolidayData.map((feature) => (
              <HolidayHours key={feature.id} feature={feature} />
            ))}

     
    </div>
  )
}

export default page