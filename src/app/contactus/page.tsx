import ContactusService from "@/components/Services/contactus/ContactusService";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};

const ContactUsPage = (props: Props) => {
  return (
    <div>
      <ContactusService />
    </div>
  );
};

export default ContactUsPage;
