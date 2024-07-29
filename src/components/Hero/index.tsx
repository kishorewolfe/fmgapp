import Link from "next/link";
import VideoPlayer from "../Header/VideoPlayer";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="">
          <VideoPlayer />
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"></div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100"></div>
      </section>
    </>
  );
};

export default Hero;
