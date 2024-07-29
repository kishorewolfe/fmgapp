const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq dark:bg-gray-800 dark:text-white " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">
        <ul>

       
        {faq.answer} </ul></div>
    </div>
  );
};

export default FAQ;
