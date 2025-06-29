import React from "react";
import { Code, Layout, Server, Settings } from "lucide-react";
import Marquee from "react-fast-marquee";

const techLogos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
    name: "JavaScript",
    resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    name: "TypeScript",
    resource: "https://www.typescriptlang.org/docs/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
    name: "React",
    resource: "https://react.dev/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    alt: "Next.js",
    name: "Next.js",
    resource: "https://nextjs.org/docs",
  },
  {
    src: "https://i.ibb.co/J1R2M9R/Tailwind-CSS-Logo.png",
    alt: "Tailwind CSS",
    name: "Tailwind CSS",
    resource: "https://tailwindcss.com/docs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
    name: "Node.js",
    resource: "https://nodejs.org/en/docs/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
    name: "Express",
    resource: "https://expressjs.com/",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "MongoDB",
    name: "MongoDB",
    resource: "https://www.mongodb.com/docs/",
  },
];

const skills = [
  {
    category: "languages",
    title: "Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "frontend",
    title: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "backend",
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "infrastructure",
    title: "Infrastructure",
    icon: Settings,
    items: ["MongoDB"],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Marquee */}
        <div className="mb-16">
          <Marquee speed={40} pauseOnHover gradient={false}>
            {techLogos.map((logo, i) => (
              <div key={i} className="mx-6 flex flex-col items-center">
                <a
                  href={logo.resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-10 object-contain grayscale hover:grayscale-0 transition"
                  />
                </a>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                  <skill.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
