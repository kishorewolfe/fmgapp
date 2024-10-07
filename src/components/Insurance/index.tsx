import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'

type Props = {}

const InsurancePage = (props: Props) => {
  return (
    <>
    
        <section className=' mt-[10rem] '>
       <div className="container">
        <SectionTitle
          title="Medicare Advantage Health Plans we Accept"
          paragraph="My Family Medical Group."
          center
        />
      </div>
    </section>
    <section className='lg:pl-[20rem] sm:pl-[1rem] mb-10'>
    <section className='w-full flex mt-[5rem] container '>
      <div >
        <a style={{height:"600px"}} className="p-8 max-w-lg border border-lime-600 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <Image src="/images/insurance/health.jpg" className="shadow rounded-lg overflow-hidden border"  alt='Doctor' width={100} height={100}/>
    <div className="mt-8">
        <h4 className="font-bold text-xl">HMO</h4>
        <p className="mt-2 text-gray-600"> Blue Shield Commercial & Blue Shield 65, HealthNet Commercial and HealthNet Senior/ Wellcare, and United Healthcare Commercial and United Healthcare Senior
        </p>
        {/* <div className="mt-5">
            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
        </div> */}
    </div>
</a>
</div>  
<div >
  <a style={{height:"600px"}} className="p-8 max-w-lg border border-lime-600 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <Image src="/images/insurance/insform.jpg" className="shadow rounded-lg overflow-hidden border" alt='Doctor' width={100} height={100} />
    <div className="mt-8">
        <h4 className="font-bold text-xl">PPO/POS</h4>
        <p className="mt-2 text-gray-600">Since we accept a variety of PPO plans, we can put: We accept majority of PPO, POS, and other types of insurance plans. Please contact your physician office with your specific insurance information, so we can verify that we are in network with your plan.
        </p>
        {/* <div className="mt-5">
            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
        </div> */}
    </div>
</a>
</div>
    </section>
    </section>
    </>

  )
}

export default InsurancePage