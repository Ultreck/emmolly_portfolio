import React, { useState } from "react";
import { socialLinks } from "../../constants";
import { Mail, Send } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import emailjs from "emailjs-com";

const getIconComponent = (iconName: string) => {
  switch (iconName.toLocaleLowerCase()) {
    case "github":
      return <FaGithub size={20} />;
    case "linkedin":
      return <FaLinkedin size={20} />;
    case "twitter":
      return <FaTwitter size={20} />;
    case "whatsapp":
      return <FaWhatsapp size={20} />;
    default:
      return null;
  }
};
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    emailjs
      .send(
        "service_26pqjht",
        "template_na0kumf",
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "du2pmGxgWHuSeQwEx" 
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError("Failed to send message. Please try again later.");
        console.error(error);
      });
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-20%" }}
      variants={fadeIn("left", "spring", 0.2, 1.0)}
      id="contact"
      className=" mx-auto w-[85%] py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 dark:border dark:border-default-200">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-pink-600 dark:text-pink-400 rounded-full mb-6 mx-auto lg:mx-0">
                <Mail size={24} />
              </div>
              <motion.h3
                initial="hidden"
                whileInView="show"
                viewport={{ margin: "-5%" }}
                variants={fadeIn("down", "spring", 0.2, 1.0)}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center lg:text-left"
              >
                Contact Information
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ margin: "-5%" }}
                variants={fadeIn("left", "spring", 0.3, 1.0)}
                className="text-gray-600 dark:text-gray-300 mb-6 text-center lg:text-left"
              >
                Fill out the form or reach out through any of the channels
                below.
              </motion.p>

              {/* <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-pink-600 dark:text-pink-400 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-5%" }}
                    variants={fadeIn("right", "spring", 0.3, 1.0)}
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      adetutuemmanueloluwatayese@gmail.com
                    </p>
                  </motion.div>
                </div>
              </div> */}

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <motion.h4
                  initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-2%" }}
                  variants={fadeIn("left", "spring", 0.2, 1.0)}
                  className="text-gray-900 dark:text-white font-medium mb-4 text-center lg:text-left"
                >
                  Connect with me
                </motion.h4>
                <div className="flex justify-center lg:justify-start space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 rounded-full transition-colors"
                      aria-label={link.platform}
                    >
                      <span className="sr-only">{link.platform}</span>
                      {getIconComponent(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 dark:border dark:border-default-200">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-5%" }}
                    variants={fadeIn("down", "spring", 0.2, 1.0)}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-5%" }}
                    variants={fadeIn("left", "spring", 0.2, 1.0)}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Your email"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-5%" }}
                  variants={fadeIn("up", "spring", 0.2, 1.0)}
                  className="mb-6"
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Subject"
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-5%" }}
                  variants={fadeIn("down", "spring", 0.2, 1.0)}
                  className="mb-6"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                    {submitError}
                  </div>
                )}

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send size={18} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
