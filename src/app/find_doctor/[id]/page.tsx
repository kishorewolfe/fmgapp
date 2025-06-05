"use client";
import { doctorData } from "@/components/FindaDoctor/DoctorData";
import React from "react";
import EachDoctorProfile from "@/components/FindaDoctor/EachDoctorProfile";
import ProfileNotFound from "@/components/FindaDoctor/ProfileNotFound";
import { Metadata } from "next";
import data from "@/components/FindaDoctor/DoctorFCPData.json"


const ProvidersPage = ({ params }) => {
  let isProfileAvailable = null;
  let i = params?.id;
  isProfileAvailable = data?.data.some((obj) => obj.Id === i);
  const doctor = data?.data.filter((obj) => obj.Id === i);

  if (isProfileAvailable) {
    return <EachDoctorProfile doctor={doctor} />;
  } else {
    return <ProfileNotFound />;
  }
};

export default ProvidersPage;
