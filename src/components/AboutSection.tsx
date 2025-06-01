
const AboutSection = () => {
    const data = {
        name: "Emmanuel Oluwatayese A.",
        phone: "+2347064778921",
        email: "adetutuemmanueloluwatayese@gmail.com",
        location: "Lagos",
        languages: "English",
        nationality: "Nigerian",
        Experience: "5+ years",
        freelance: "Available",
    }
  return (
    <div>
        <section
            id="resume"
            className="py-20 min-h-screen mx-auto relative lg:w-[85%] bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                {data.name} is a passionate software developer with over {data.Experience} of experience in building web applications.
                </p>
            </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSection