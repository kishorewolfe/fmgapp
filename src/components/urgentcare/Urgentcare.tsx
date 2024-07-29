import React from 'react'
import Image from 'next/image'
type Props = {}

const Urgentcare = (props: Props) => {
  return (
<div style={{marginTop:"100px"}} className='pb-5'>
<div className="bg-gray-50 px-2 py-10">
<div id="features" className="mx-auto max-w-6xl">
  <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
  Urgent Care
  </h2>  <p className="text-center text-base font-semibold leading-7 text-primary-500">Locations</p>

  <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
    <li className="rounded-xl bg-white px-6 py-8 shadow-sm">

      <Image src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10" width={100} height={100}  />
      <h3 className="my-3 font-display font-medium">TotalCare Walk-in Clinic</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
      Roswell Avenue, Suite 118 Chino, CA 91710 <br/>
Phone: 909-591-8200 <br/>


      </p>

    </li>
    <li className="rounded-xl bg-white px-6 py-8 shadow-sm">

      <Image src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt="" className="mx-auto h-10 w-10" width={100} height={100} />
      <h3 className="my-3 font-display font-medium">TotalCare Walk-in Clinic</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
      13334 Limonite Avenue, suite 130 Eastvale, CA 92880<br/>
Phone: 951-407-1460 <br/>

      </p>

    </li>
    <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
      <Image src="https://www.svgrepo.com/show/530444/availability.svg" alt="" className="mx-auto h-10 w-10"  width={100} height={100}/>
      <h3 className="my-3 font-display font-medium">TotalCare Walk-in Clinic</h3>
      <p className="mt-1.5 text-sm leading-6 text-secondary-500">
      1973 Foothill Parkway, Suite 104 Corona, CA 92881<br/>
Phone: 951-460-2300 <br/>
      </p>

    </li>

  </ul>
</div>
</div>
</div>

  )
}

export default Urgentcare;