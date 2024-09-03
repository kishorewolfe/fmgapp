import Patientservicescreen from "@/components/Services/Patient/Patientservicescreen";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};

const PatientServicePage = (props: Props) => {
  return (
    <div>
      <Patientservicescreen />
    </div>
  );
};

export default PatientServicePage;
