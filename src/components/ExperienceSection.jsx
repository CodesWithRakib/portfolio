import React from "react";
import { FiBookOpen, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    role: "Aspiring Full Stack Developer",
    company: "Self-Learning & Personal Projects",
    duration: "2022 - Present",
    description: [
      "Learning modern web development technologies including React, Node.js, and MongoDB",
      "Building personal projects to apply concepts and improve coding skills",
      "Following best practices in coding, version control, and deployment",
    ],
    technologies: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Online Courses & Workshops",
    company: "Various Platforms",
    duration: "2021 - Present",
    description: [
      "Completed courses on full-stack development, JavaScript, and UI/UX design",
      "Practiced problem-solving and algorithm challenges regularly",
      "Participated in coding communities to learn and collaborate",
    ],
    technologies: ["JavaScript", "TypeScript", "Git", "Responsive Design"],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Journey
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My path to becoming a skilled full stack developer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative group">
              {/* Dot */}
              <span className="absolute left-[-0.75rem] top-2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-gray-900 z-10 shadow" />

              {/* Content Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300">
                {/* Role */}
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  <FiBookOpen /> {exp.role}
                </div>

                {/* Company & Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <FiCalendar />
                  <span>{exp.duration}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-300 font-semibold mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-400 text-sm mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 dark:bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
