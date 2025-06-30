import React from "react";
import { FiBook, FiAward } from "react-icons/fi";

const education = [
  {
    id: 1,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Hossenpur Degree College",
    year: "2024",
    description: "Completed Higher Secondary Certificate focusing on Science",
  },
];

const certifications = [
  {
    id: 1,
    name: "Complete Web Development Bootcamp - Batch 11",
    issuer: "Programming Hero",
    year: "2025",
  },
  {
    id: 2,
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    issuer: "Jonas Schmedtmann (Udemy)",
    year: "2023",
  },
  {
    id: 3,
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Jonas Schmedtmann (Udemy)",
    year: "2024",
  },
  {
    id: 4,
    name: "Frontend Domination",
    issuer: "Sheryians Coding",
    year: "2024",
  },
  {
    id: 5,
    name: "The Complete JavaScript Course 2025: From Zero to Expert!",
    issuer: "Jonas Schmedtmann (Udemy)",
    year: "2023",
  },
  {
    id: 6,
    name: "Delta 6 Course",
    issuer: "Apna College",
    year: "2024",
  },
  {
    id: 7,
    name: "Build Responsive Real-World Websites with HTML and CSS",
    issuer: "Jonas Schmedtmann (Udemy)",
    year: "2022",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Education &{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My academic background and professional qualifications
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Block */}
          <div data-aos="fade-right" data-aos-duration="700">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <FiBook className="text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-all duration-200"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>{edu.institution}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div data-aos="fade-left" data-aos-duration="700">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <FiAward className="text-indigo-600 dark:text-indigo-400" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-md transition-all duration-200"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
