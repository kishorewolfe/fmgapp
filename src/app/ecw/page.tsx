"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function YourPage() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://ecw.myfamilymg.com/mobiledoc/jsp/webemr/login/newLogin.jsp",
    );
  }, [router]);

  return (
    <div className=" mt-24 py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Redirecting to{" "}
            <span className=" text-4xl same-fntsty mb-10 text-[65px] font-bold text-[#183f57] dark:text-white">
              eClinicalWorks
            </span>{" "}
            ...
          </h1>
        </div>
      </div>
    </div>
  );
}
