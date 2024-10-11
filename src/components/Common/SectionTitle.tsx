const SectionTitle = ({
  title,
  paragraph,
  width = "970px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <p className="mb-4 text-3xl font-bold !leading-tight text-lime-600 dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
