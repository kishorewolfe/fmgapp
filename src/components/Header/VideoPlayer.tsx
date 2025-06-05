import React from 'react'
import "./Header.css"
type Props = {}

const VideoPlayer = (props: Props) => {
  return (
 
    <div> <div className="herovid" >
    <div className=" absolute contents text-center " >
        <h1 className='uppercase text-[white] lg:tracking-[1.5rem]  md:tracking-[1.2rem] sm:tracking-[1rem] font-semibold px-0 py-8 lg:text-5xl md:text-3xl sm:text-sm  xs:text-xs '>Call us now for an appointment</h1>
        <div className="">
            <a  href="tel:+909-591-6446" className='bg-transparent text-[15px] hover:text-white 
            uppercase lg:tracking-[0.5rem] transition-[0.25s] 
            duration-[background-color] mx-4 my-0 lg:px-10 p-4 border-solid border-2 sm:tracking-[0.3rem] bg-white text-black hover:bg-black ;
'> (909) 591-6446</a>
        </div>
    </div>
    <video
        src={'/videos/doctor.mp4'}
        autoPlay
        muted
        loop
        className={"video "}
    />
</div></div>
  )
}

export default VideoPlayer