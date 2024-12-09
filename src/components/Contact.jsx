import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  // Social media links data
  const socialLinks = [
    {
      name: 'Github',
      icon: <AiOutlineGithub size={20} />,
      link: 'https://github.com/dastanNurbek'
    },
    {
      name: 'LinkedIn',
      icon: <AiOutlineLinkedin size={20} />,
      link: 'https://www.linkedin.com/in/dastan-nurbekuly-1758362b3/'
    },
    {
      name: 'Email',
      icon: <AiOutlineMail size={20} />,
      link: 'mailto:dastan.nurbek22@gmail.com'
    },
    {
      name: 'Instagram',
      icon: <AiOutlineInstagram size={20} />,
      link: 'https://www.instagram.com/dastandesu/'
    }
  ];

  return (
    <div id='contact' className="bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase">Get In Touch</h2>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-sm md:max-w-2xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors duration-300">
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {social.icon}
                </span>
              </div>
              <span className="mt-4 text-sm font-medium text-gray-600 group-hover:text-gray-950">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;