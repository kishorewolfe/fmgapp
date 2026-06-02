import React from "react";

const resources = [
  {
    title: "American Cancer Society – Join The Fight",
    image: "/images/Edu/AmericanS.svg",
    link: "https://www.cancer.org",
  },
  {
    title: "American Diabetes Association",
    image: "/images/Edu/ADA85_logo_full_RGB_0.svg",
    link: "https://diabetes.org",
  },
  {
    title: "American Heart Association",
    image: "/images/Edu/heart.svg",
    link: "https://www.heart.org",
  },
  {
    title: "Arthritis Foundation",
    image: "/images/Edu/arthiritis.jpg",
    link: "https://www.arthritis.org",
  },
  {
    title: "Quit Assist (Nicotine Cessation)",
    image: "/images/Edu/quitassist-logo.png",
    link: "https://www.quitassist.com/",
  },
  {
    title: "Rheumatoid Arthritis Support Network (RASN)",
    image: "/images/Edu/logo-rasn2.png",
    link: "https://www.rheumatoidarthritis.org",
  },
  {
    title: "USDA My Plate",
    image: "/images/Edu/usda.png",
    link: "https://en.wikipedia.org/wiki/MyPlate",
  },
  {
    title: "Online Sterilization Form",
    image: "/images/Edu/OnlineSterilizationForm.png",
    link: "#",
  },
  {
    title: "About BMI",
    image: "/images/Edu/bmi.jpg",
    link: "#",
  },
  {
    title: "BMI Calculator",
    image: "/images/Edu/calc.png",
    link: "https://www.calculator.net/bmi-calculator.html",
  },
];

export default function HealthEdu() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-cyan-50 via-white to-lime-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lime-100 dark:bg-lime-600/20 border border-lime-200 dark:border-lime-500/20 text-cyan-700 dark:text-lime-300 font-semibold text-sm">
            🩺 HEALTH EDUCATION
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Health Education Resources
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-lime-500 mx-auto rounded-full mt-6"></div>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore trusted healthcare organizations, wellness programs,
            patient education resources, nutrition guides, and health tools
            designed to help you make informed decisions about your wellbeing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {resources.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                dark:bg-slate-700
                border
                border-slate-200
                dark:border-slate-600
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-lime-500"></div>

              <div className="p-6 flex items-center gap-6">

                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="
                    w-24
                    h-24
                    rounded-2xl
                    bg-white
                    dark:bg-slate-800
                    border-2
                    border-lime-200
                    dark:border-lime-500/30
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    shadow-md
                    group-hover:scale-105
                    transition-all
                    duration-300
                  ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">

                  <h3 className="
                    text-xl
                    font-bold
                    text-slate-800
                    dark:text-white
                    group-hover:text-cyan-700
                    dark:group-hover:text-cyan-400
                    transition-colors
                    duration-300
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-2
                    text-sm
                    text-slate-500
                    dark:text-slate-300
                  ">
                    Click to access educational resources and learn more.
                  </p>

                  <div className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-cyan-700
                    dark:text-cyan-400
                    font-semibold
                    text-sm
                  ">
                    Visit Resource

                    <span className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    ">
                      →
                    </span>
                  </div>
                </div>

                {/* Right Icon */}
                <div className="
                  hidden
                  md:flex
                  w-12
                  h-12
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-600
                  to-lime-500
                  items-center
                  justify-center
                  text-white
                  font-bold
                  shadow-lg
                  group-hover:scale-110
                  transition-all
                  duration-300
                ">
                  ↗
                </div>

              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}