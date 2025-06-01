const AboutSectionPart = () => {
  const data = [
  {  title: "Name", value: "Emmanuel Oluwatayese A."},
   { title: "Phone number", value: "+2347064778921"},
   { title: "Email", value: "adetutuemmanueloluwatayese@gmail.com"},
   { title: "Location", value: "Lagos"},
    {title: "Language", value: "English"},
   { title: "Nationality", value: "Nigerian"},
   { title: "Experience", value: "5+ years"},
    {title: "Freelance", value: "Available"},
  ];
  return (
    <div>
      <section
        id="resume"
        className="py-10 min-h-screen mx-auto relative lg:w-[85%]"
      >
        <div className="w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mb-16">
            {data.map((item, index) => (
                <p key={index} className="text-gray-600 shadow py-2 px-3 rounded-lg text-start border dark:text-gray-400">
            <h1 className="text-lg font-semibold font-mono">{item?.title}</h1>
            <span className="dark:text-white">{item?.value}</span>
          </p>
        ))}

        </div>
      </section>
    </div>
  );
};

export default AboutSectionPart;
