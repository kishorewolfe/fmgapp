import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LabCorpCard from "@/components/LabCorpCard/LabCorpCard";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family MG",
  description: "Family MG",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <LabCorpCard/>
      <Features />
      <Testimonials />
    
    </>
  );
}
