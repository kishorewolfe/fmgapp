"use client";
import { doctorData } from "@/components/FindaDoctor/DoctorData";
import React from "react";
import EachDoctorProfile from "@/components/FindaDoctor/EachDoctorProfile";
import ProfileNotFound from "@/components/FindaDoctor/ProfileNotFound";
import { Metadata } from "next";


const ProvidersPage = ({ params }) => {
  let isProfileAvailable = null;
  let i = params?.id;
  isProfileAvailable = doctorData.some((obj) => obj.id === Number(i));
  const doctor = doctorData.filter((obj) => obj.id === Number(i));

  if (isProfileAvailable) {
    return <EachDoctorProfile doctor={doctor} />;
  } else {
    return <ProfileNotFound />;
  }
};

export default ProvidersPage;
