"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center lg:text-left">
          {/* Logo & Address Section */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-5/12 mb-12 lg:mb-16">
            <div className="mx-auto max-w-xs">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo/FMG.png"
                  alt="logo"
                  className="w-auto dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/FMG.png"
                  alt="logo"
                  className="hidden dark:block w-auto"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                5475 Walnut Ave Chino, CA 91710<br />
                (909) 591-6446
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {/* Facebook */}
                <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="text-body-color hover:text-lime-600 dark:text-body-color-dark dark:hover:text-cyan-600 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="currentColor">
                    <path d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                  className="text-body-color hover:text-lime-600 dark:text-body-color-dark dark:hover:text-cyan-600 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="text-body-color hover:text-lime-600 dark:text-body-color-dark dark:hover:text-cyan-600 transition-colors">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor">
                    <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 0 9.0627 0 9.0627 0C9.0627 0 3.54766 0 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="text-body-color hover:text-lime-600 dark:text-body-color-dark dark:hover:text-cyan-600 transition-colors">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hours Section */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12 mb-12 lg:mb-16">
            <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Hours</h2>
            <ul className="space-y-2 text-body-color dark:text-body-color-dark">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                <li className="pb-1" key={day}>{day}:  8:30 AM  – 5 PM</li>
              ))}
               <li>Closed for lunch from 12:30 PM to 1:30 PM</li>
              <li>
               
                <Link href="/holidayhours" className="underline hover:text-lime-600 dark:hover:text-cyan-400">
                  Holiday Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* eClinicalWorks Section */}
          <div className="w-full md:w-1/2 lg:w-4/12 xl:w-4/12 mb-12 lg:mb-16">
  <div className="flex flex-col items-center text-center">
    <Image
      src="/images/eclinical/tene.png"
      alt="eClinicalWorks"
      width={110}
      height={100}
    />
    <Link
      href="https://ecw.myfamilymg.com/mobiledoc/jsp/webemr/login/newLogin.jsp"
      className="mt-2 text-xl font-bold text-[#183f57] dark:text-white"
    >
      eClinicalWorks
    </Link>
  </div>
</div>

        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-500"></div>

        {/* Bottom Footer */}
        <p className="text-center text-sm text-body-color dark:text-white">
          © My Family Medical Group. All rights reserved. | 5475 Walnut Ave., Chino, CA 91710 | (909) 591-6446 | TTY / TTD users may call: 711
        </p>

        <div className="text-center mt-3">
          <Link
            href="/fmgprivacypolicy"
            className="underline text-sm text-gray-900 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
