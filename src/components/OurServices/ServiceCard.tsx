import { Brand } from "@/types/brand";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="relative mx-auto max-w-7xl bg-gray-light px-1 px-2  py-2 pb-2 dark:bg-gray-dark md:pt-1">
          <p className="font-xs max-w-7xl text-center text-xl tracking-wide text-gray-600 md:text-2xl">
            Upon request Utilization Management Policies & Procedures and
            Utilization Management Criteria used to authorize, modify or deny
            healthcare services will be disclosed to providers, members or
            persons designated by members and the public. The staff at My Family
            Medical Group accepts collect calls regarding UM issues during
            normal business hours. (909) 591-6446; TTY:711. Monday to Friday
            8:00am to 5:00pm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
