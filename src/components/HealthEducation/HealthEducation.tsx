import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const HealthEducationPage = (props: Props) => {
  return (
    <div>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <Image src="/images/services/504.jpg" alt="Logo" className="object-cover w-40 h-40 mb-8 rounded-full"  width={1000} height={563}/>
    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
    <p className="text-lg mb-8 px-4 md:px-0">Health Education & Preventative Care (A list of the Health Screenings that are recommended by age)</p>
    <div className="flex justify-center items-center space-x-4">
        <Link href="/" className="bg-lime-600 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Back To Home</Link>
        <a href="tel:+909-591-6446"  className="bg-cyan-600 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact Us</a>
    </div>
</div>
</div>
  )
}

export default HealthEducationPage