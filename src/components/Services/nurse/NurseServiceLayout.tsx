import React from 'react'
import Image from 'next/image'
import NurseService from './NurseService'
type Props = {}

const NurseServiceLayout = (props: Props) => {
  return (
    <> 
    <div style={{background:"#F8F9FC"}} className=''>
    <div className="flex flex-wrap bg-slate-100 lg:flex dark:bg-slate-900">
      <div className="w-full sm:w-7/12">
        <div className=" mx-auto h-full">
          <div style={{marginTop:"220px",marginLeft:"15px"}}>
          <NurseService/>
          
          </div>
       
          <div>
           
          </div>
        
        </div>
        
      </div>
      <section className="cover bg-blue-teal-gradient relative sm:w-5/12 bg-cyan-600 sm:px-8 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
    items-center min-h-screen">
        
        <div className="h-full w-full absolute top-0 left-0 z-0 headerimg">
        <Image
        src="/images/nurse/nurse.jpg"
        alt="Leafs"
        className="h-48 object-cover sm:h-screen  opacity-20"
        width={1080}
        height={1920}
        objectFit='contain' 
      ></Image>
      </div>
     
      </section>


    </div>
  </div>
  </>
  )
}

export default NurseServiceLayout