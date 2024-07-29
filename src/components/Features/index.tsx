import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Services Include"
            paragraph=""
            center
            width="600px"
          />

          <section className="body-font text-gray-700">
            <div className="container mx-auto px-5 py-4">
              <div className="-m-4 flex flex-wrap text-center">
                {featuresData.map((feature) => (
                  <SingleFeature key={feature.id} feature={feature} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Features;
