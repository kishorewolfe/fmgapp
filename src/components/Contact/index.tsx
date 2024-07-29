import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
             <h2 className="mb-3 text-2xl font-bold text-lime-500 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              FOR OUR MEMBERS
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <div > 
              <p className="tracking wide">
              My Family Medical Group can help you make better health decisions. 
              Our team of primary care physicians can provide you with the most recent 
              preventative health services and refer you to our surrounding network of
               specialists to ensure that your health needs come first. Moreover, 
               our extended hours urgent care allows you to get urgent medical care whenever you need it.
                If you have any questions regarding your benefits, appointments,
                 or anything else regarding your insurance, our Member Services department can assist you. 
                 Our Member Services department can be reached by calling (909) 591-6446 Monday through Friday 
                 between the hours of 8:00AM to 5:00PM.

              </p>
              
              </div>


            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
