import Link from 'next/link'
import React from 'react'

type Props = {}

const LabCorpCard = (props: Props) => {
  return (
    <main className="pt-16 bg-gray-100 dark:bg-slate-900">
    <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-white">Find a Lab Near You</h1>
                <p className="text-xl text-gray-600 mb-6 dark:text-white">Locate a patient center lab in your area, check its hours, and schedule an appointment.</p>
                <Link href="https://www.labcorp.com/" className="inline-block bg-lime-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-lime-700 transition duration-300">Learn More</Link>
            </div>

            <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-white">Why Choose Us?</h2>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center dark:text-white">
                            <svg className="w-5 h-5 text-lime-600 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            We Do In-house blood draw for our patients
                        </li>
                        <li className="flex items-center dark:text-white">
                            <svg className="w-5 h-5 text-lime-600 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Be sure to bring the Labcorp test request form from your healthcare
                        </li>
                        <li className="flex items-center dark:text-white">
                            <svg className="w-5 h-5 text-lime-600 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Customizable solutions on Lab appointment
                        </li>
                    </ul>
                    <div className="space-y-4">
                        <Link href="https://www.labcorp.com/labs-and-appointments" className="block text-center border border-lime-600 text-lime-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

  )
}

export default LabCorpCard