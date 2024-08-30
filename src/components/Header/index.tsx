"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Menu } from "@/types/menu";
import "./Header.css";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const menuData: any[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "Contact us",
      path: "/contactus",
      newTab: false,
    },
    ,
    {
      id: 5,
      title: "Find a Doctor",
      path: "/find_doctor",
      newTab: false,
    },
    ,
    {
      id: 8,
      title: "UM Cares",
      path: "/umcares",
      newTab: false,
    },

    {
      id: 3,
      title: null,
      path: "/",
      component: (
        <div>
          <Image
            src="/images/logo/FMG.png"
            alt="logo"
            width={140}
            height={33}
            className="mb-5 w-full xs:hidden lg:block"
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Forms",
      path: "/forms",
      newTab: false,
    },
    {
      id: 8,
      title: "Health Edu",
      path: "/healthedu",
      newTab: false,
    },

    {
      id: 6,
      title: "Providers Login",
      path: "https://ezcap.myfamilymg.com/EZ-NET60/Login.aspx",
      newTab: false,
    },
    {
      id: 7,
      title: "Urgent Cares",
      path: "/urgentcare",
      newTab: false,
    },
  ];

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center py-5 dark:bg-black ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-black dark:shadow-sticky-dark"
            : "absolute bg-white bg-opacity-50	"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-end justify-between">
            <div className="w-[106rem] max-w-full px-4 xs:block  md:hidden lg:hidden xl:mr-12">
              <Link
                href="/"
                className={`header-logo ms:text-sm block w-full lg:text-xl ${
                  sticky ? "py-5 lg:py-2" : "py-4"
                } `}
              >
                <Image
                  src="/images/logo/FMG.png"
                  alt="logo"
                  width={200}
                  height={80}
                  className="w-full  xs:block md:hidden lg:hidden"
                />
              </Link>
            </div>
            <div className="flex w-full items-end justify-center px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 mx-20   w-[250px] rounded border-[.5px] border-body-color/50 bg-white p-5 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul
                    className="block lg:flex lg:space-x-12  "
                    style={{ alignItems: "end" }}
                  >
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative ">
                        {menuItem.path ? (
                          menuItem?.id === 3 ? (
                            <div className="logoimg">
                              <Image
                                src="/images/logo/FMG.png"
                                alt="logo"
                                width={240}
                                height={60}
                                className="logoimg"
                              />
                            </div>
                          ) : (
                            <Link
                              href={menuItem.path}
                              onClick={navbarToggleHandler}
                              className={`lg:text-md flex py-2 text-base md:text-sm lg:mr-0 lg:inline-flex  lg:px-0 ${
                                usePathName === menuItem.path
                                  ? "text-lime-400 dark:text-white"
                                  : "text-dark hover:text-cyan-600 dark:text-white/70 dark:hover:text-white"
                              }`}
                            >
                              <h3 className="text-dark hover:text-cyan-600 dark:text-white xs:mb-[10px] sm:text-sm md:text-sm lg:mb-[-20px] font-semibold xl:text-md lg:text-md ">
                                {menuItem.title}{" "}
                              </h3>
                            </Link>
                          )
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            ></div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className=" toggleDarkmode justify-end pr-16 xs:justify-center lg:pr-0">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
