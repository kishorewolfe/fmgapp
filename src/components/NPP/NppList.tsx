"use-client";
import React, { useState } from "react";
import FAQ from "./FAQ";
export default function NppList() {
  
  const [faqs, setFaqs] = useState([
    {
      question: "Get an electronic or paper copy of your medical record",
      answer: (
        <>
          {" "}
          <p>
            You can ask to see or get an electronic or paper copy of your
            medical record and other health information we have about you. Ask
            us how to do this.
          </p>
          <p>
            {" "}
            We will provide a copy or a summary of your health information,
            usually within 30 days of your request. We may charge a reasonable,
            cost-based fee.
          </p>
        </>
      ),
      open: true,
    },
    {
      question: "Ask us to correct your medical record",
      answer: (
        <p>
          You can ask us to correct health information about you that you think
          is incorrect or incomplete. Ask us how to do this. We may say “no” to
          your request, but we’ll tell you why in writing within 60 days.
        </p>
      ),
      open: false,
    },
    {
      question: "Request confidential communications",
      answer: (
        <p>
          You can ask us to contact you in a specific way (for example, home or
          office phone) or to send mail to a different address. We will say
          “yes” to all reasonable requests.
        </p>
      ),
      open: false,
    },
    {
      question: "Ask us to limit what we use or share.",
      answer: (
        <p>
          You can ask us not to use or share certain health information for
          treatment, payment, or our operations.
        </p>
      ),
      open: false,
    },
    {
      question:
        "We are not required to agree to your request, and we may say “no” if it would affect your care",
      answer: (
        <p>
          If you pay for a service or health care item out-of-pocket in full,
          you can ask us not to share that information for the purpose of
          payment or our operations with your health insurer. We will say “yes”
          unless a law requires us to share that information.
        </p>
      ),
      open: false,
    },
    {
      question: "Choose someone to act for you",
      answer: (
        <p>
          If you have given someone medical power of attorney or if someone is
          your legal guardian, that person can exercise your rights and make
          choices about your health information. We will make sure the person
          has this authority and can act for you before we take any action. File
          a complaint if you feel your rights are violated
        </p>
      ),
      open: false,
    },
    {
      question: "Our Responsibilities",
      answer: (
        <p>
          We are required by law to maintain the privacy and security of your
          protected health information. We will let you know promptly if a
          breach occurs that may have compromised the privacy or security of
          your information. We must follow the duties and privacy practices
          described in this notice and give you a copy of it. We will not use or
          share your information other than as described here unless you tell us
          we can in writing. If you tell us we can, you may change your mind at
          any time. Let us know in writing if you change your mind.
        </p>
      ),
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      }),
    );
  };

  return (
    <div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ}  />
        ))}
      </div>
    </div>
  );
}
