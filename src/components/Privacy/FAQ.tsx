import React from 'react'
import faqData from './FaqData'
type Props = {}

const FAQ = (props: Props) => {
  return (
    <div className='mt-10'>
      <section className="sm:py-10 bg-yellow-400 overflow-hidden" id="faq">
        <div className="container mx-auto px-4">
            <div className="relative py-16 px-8 bg-yelloww overflow-hidden rounded-3xl">
                <div className="relative z-10 md:max-w-7xl mx-auto">
                    <div className=" mb-10"><span className="inline-block mb-5 text-md text-mygray font-bold uppercase tracking-widest">HIPAA Frequently Asked Questions
                    </span>
                        <h2 className="font-heading text-4xl    text-mygray text-4xl lg:text-5xl font-bold font-heading">
                        Below are the privacy policies of My Family Medical Group both for this website and for personal health information.
</h2>
                    </div>
                    <div className="flex flex-wrap -m-3">
                      {faqData.map((faq , i )=>{
                        return(
                          <div className="w-full p-3" key={i}>
                          <div className="p-10 bg-zinc-100 rounded-3xl dark:bg-cyan-800">
                              <div className="flex flex-wrap -m-2">
                                  <div className="w-full md:w-1/2 p-2">
                                      <h3 className="font-heading text-xl text-black font-black dark:text-white font-white ">{faq?.question}
                                      </h3>
                                  </div>
                                  <div className="w-full md:w-1/2 p-2">
                                      <p className="text-black font-medium dark:text-white font-white">{faq?.answer}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                        )
                      })}
                       


                    </div>
                </div>
            </div>

        </div>


    </section>
    </div>
  )
}

export default FAQ