import React from 'react'
import Image from 'next/image'
type Props = {}
// Hours of Operation:
// Monday - Friday 12PM to 11PM
// Saturday - Sunday 8AM to 8PM

// Phone Lines
// Main Line: 909-591-6446
// Appointments: 909-287-7555
// Patient Billing: 909-287-7520
// Urgent Care: 909-287-7501
const ContactusService = (props: Props) => {
  return (
   <div style={{marginTop:"200px",background:"#F8F9FC"}}>
     <section className="text-gray-700 body-font relative container rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0"  title="map" scrolling="no"
      src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d126.8637920945285!2d-117.68472671959053!3d34.026459064496365!2m2!1f186.66956433079434!2f45!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x80c3331eb1bba35b%3A0x257f7724703edec3!2sMy%20Family%20Medical%20Group!5e1!3m2!1sen!2sin!4v1718425728292!5m2!1sen!2sin"  style={{"border":0}}  loading="lazy">
     </iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex text-center">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font items-center justify-center ">Contact Us</h2>
     
<Image
                    src="/images/logo/FMG.png"
                    alt="logo"
                    className=" dark:hidden self-center"
                    width={300}
                    height={100}
                  />
                  <br/>
                   <p className="leading-relaxed font-medium title-font mb-5 text-gray-600">My Family Medical Group
5475 Walnut Ave.
Chino, CA 91710</p>
     
    </div>
  </div>
</section>

<div className='mt-10 container '>
<section className=" sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 p-2">
    <div className="flex flex-col justify-center">
        <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 xl:p-1 mt-3 bg-gray-50 bg-gradient-to-tr from-lime-500 to-cyan-600">
        <div className="bg-white p-7 rounded-md">
                <h4 className=" font-bold text-2xl leading-tight">Hours of Operation:</h4>
                <div className="my-4">
                    <p>Monday - Friday 8AM to 5PM</p>
                    <p>Saturday - Sunday 8AM to 8PM</p>
                    <br/>
                    <br/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
    <div className="flex flex-col justify-center">
      
        <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 xl:p-1 mt-3 bg-gray-50 bg-gradient-to-tr from-lime-500 to-cyan-600 ">
        <div className="bg-white p-7 rounded-md">
                <h4 className=" font-bold text-2xl leading-tight">Phone Lines</h4>

                <div className="my-4">
                    <p className='text-xl'>Main Line: 909-591-6446</p>
                    <p className='text-xl'>Appointments: 909-287-7555</p>
                    <p className='text-xl'>Patient Billing: 909-287-7520</p>
                  
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>

</section>
<div className='mt-10 container '>
  
<div
    className=" lg:px-2  mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 dark:bg-gray-800 my-10">
    <div className="lg:w-[650px] lg:px-5 flex flex-col ">
    <header className="container mt-10 h-full items-center px-1 lg:mt-0 lg:flex">
        <div className="w-full">
          <h1 className="text-4xl font-bold lg:text-6xl">
            <span className="text-lime-600">Emails</span>{" "}
          </h1>
          <div className="my-4 h-2 w-20 bg-green-700"></div>
          <p className="mb-10 text-xl">
          Administration, Suggestions or Concerns: admin@myfamilymg.com  
          </p>
          <p className="mb-10 text-xl">
          Billing Inquiries: billing@myfamilymg.com 
          </p>
          <p className="mb-10 text-xl">
          Career Opportunities: careers@myfamilymg.com  
          </p>
        </div>
      </header>
      
       
       
    </div>
    <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
        <Image className="rounded-3xl w-full"
            src="/images/contactus/contactus.jpg"
            alt="" width={400} height={100}/>
    </div>
</div>

</div>


</div>
    
   </div>
  )
}

export default ContactusService