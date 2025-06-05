import CardForms from "@/components/Forms/CardForms";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const page = (props: Props) => {
  return (<>
   <div className="relative mx-auto mt-36 max-w-7xl">
  {/* Image Container */}
  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border shadow-md">
    {/* Image */}
    <Image
      className="h-full w-full object-cover"
      src="/images/services/healthforms.jpg"
      alt="Forms Download"
   
      fill
    />

    {/* Blue Overlay */}
    <div className="absolute inset-0 bg-cyan-700 opacity-50"></div>

    {/* Text Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white text-7xl font-bold">Forms Download</h2>
    </div>
  </div>

  
</div>
<CardForms />
</>

  );
};

export default page;
