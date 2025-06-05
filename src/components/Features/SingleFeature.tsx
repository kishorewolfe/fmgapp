import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, iconDark,datalink } = feature;
  return (
    <Link className="w-full p-4 sm:w-1/2 md:w-1/3" href={datalink}>
      <div className="transform rounded-lg border-2 border-gray-600 px-4 py-6 transition duration-500 hover:scale-110 ">
        <span className="block dark:hidden"> {icon}</span>

        <span className="hidden dark:block "> {iconDark}</span>

        <p className="title-font font-medium text-gray-900 dark:text-white sm:text-sm md:text-sm lg:text-xl">
          {" "}
          {title}
        </p>
      </div>
    </Link>
  );
};

export default SingleFeature;
