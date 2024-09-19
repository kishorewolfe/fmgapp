import ContactusService from "@/components/Services/contactus/ContactusService";
import { Metadata } from "next";
import React from "react";
import { NextSeo } from 'next-seo';

type Props = {};

<NextSeo
title="My Family Medical Group"
description="My Family Medical Group"
canonical="https://myfamilymg.com/"
openGraph={{
  url: 'https://myfamilymg.com/',
  title: 'My Family Medical Group',
  description: 'This is a sample description for the landing page.',
 
 
}}

/>

const ContactUsPage = (props: Props) => {
  return (
    <div>
      <ContactusService />
    </div>
  );
};

export default ContactUsPage;
