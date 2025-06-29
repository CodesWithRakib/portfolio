import React from "react";
import { FiGithub, FiExternalLink, FiCode, FiServer } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Globira - B2B Wholesale Marketplace",
    description:
      "A full-stack B2B platform for browsing, listing, and managing wholesale products. Built with secure authentication, responsive design, and modern features for buyers and sellers.",
    features: [
      "Firebase Authentication (email, Google)",
      "Product listing with filters, pagination, search",
      "JWT-based secure backend",
      "Cloudinary image upload",
      "Dark/Light mode support",
      "Protected routes and user role-based access",
    ],
    technologies: [
      "React 19",
      "Tailwind CSS v4",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "Vercel Serverless",
    ],
    image: "https://i.ibb.co/wNRc8LC2/globira-site-web-app-front.png",
    githubClient: "https://github.com/CodesWithRakib/globira-client-side",
    githubServer: "https://github.com/CodesWithRakib/globira-server-side",
    liveLink: "https://b11a11-globira-site.web.app/",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Green Nest - Plant Care Tracker",
    description:
      "A full-stack plant care application that allows users to manage, monitor, and share houseplants with features like watering schedules, dark mode, and secure login.",
    features: [
      "User authentication with Firebase (email/password & Google)",
      "Add, update, delete personal plants",
      "Watering schedule tracking with smart reminders",
      "Responsive dark/light mode toggle",
      "Private/protected routes for logged-in users",
      "Share plants on public listing",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "React Toastify",
      "Date-fns",
      "SweetAlert2",
      "React Slick",
    ],
    image: "https://i.ibb.co/4nKJGQ3K/green-nest-plant-care-tracker-front.png",
    githubClient: "https://github.com/CodesWithRakib/plant-care-client-side",
    githubServer: "https://github.com/CodesWithRakib/plant-care-server-side",
    liveLink: "https://green-nest-plant-care-tracker.web.app/",
    category: "fullstack",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected projects showcasing my expertise and problem-solving
            approach
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Image - Now properly responsive */}
              <div className="lg:w-1/2 w-full h-64 sm:h-80 md:h-96 lg:h-auto relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/800x450?text=Project+Image";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col">
                {/* Category */}
                <div className="mb-3 sm:mb-4 flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  <FiCode className="w-4 h-4" />
                  <FiServer className="w-4 h-4" />
                  <span>Full Stack Project</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links - Improved mobile responsiveness */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Client Code</span>
                    </a>
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Server Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
