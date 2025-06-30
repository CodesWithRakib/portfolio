import React from "react";
import { useParams, Link } from "react-router";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

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
    challenges: [
      "Implementing real-time inventory updates without excessive API calls",
      "Managing user roles and permissions across different access levels",
      "Optimizing image uploads and storage with Cloudinary",
      "Creating a responsive design that works well on both desktop and mobile for complex data tables",
    ],
    improvements: [
      "Add real-time chat between buyers and sellers",
      "Implement advanced analytics dashboard for sellers",
      "Add bulk order processing functionality",
      "Integrate payment gateway for seamless transactions",
    ],
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
    challenges: [
      "Implementing accurate watering schedule calculations based on plant types",
      "Creating an intuitive UI for plant care tracking",
      "Handling image uploads for plant photos",
      "Developing effective notification system for care reminders",
    ],
    improvements: [
      "Add plant disease detection using image recognition",
      "Implement community features for plant enthusiasts",
      "Add plant growth tracking with photo timeline",
      "Integrate with smart home devices for automated care",
    ],
  },
  {
    id: 3,
    title: "CareerHub - Freelance & Job Marketplace",
    description:
      "A modern freelance and job marketplace inspired by Fiverr and Upwork. Employers can post jobs, and freelancers can offer services with full authentication, search, filtering, and responsive UI.",
    features: [
      "Firebase Authentication (Email/Password, Google login)",
      "Modern landing page with animated banner",
      "Search and Filter functionalities",
      "Profile creation and role-based access (Employer / Freelancer)",
      "Job and service listings",
      "Contact form with EmailJS",
      "Toast notifications",
      "Animations using AOS and GSAP",
      "Dark/Light theme toggle",
      "Fully responsive UI with Tailwind CSS",
    ],
    technologies: [
      "React 19",
      "Tailwind CSS v4",
      "Firebase",
      "React Router v7",
      "AOS",
      "GSAP",
      "React Toastify",
      "React Slick",
      "Slick Carousel",
      "EmailJS",
    ],
    image: "https://i.ibb.co/MxyXQL9J/careerhub-front.png",
    githubClient: "https://github.com/CodesWithRakib/careerhub-client-side",
    githubServer: "https://github.com/CodesWithRakib/careerhub-client-side",
    liveLink: "https://careerhub-codeswithrakib.netlify.app/",
    category: "fullstack",
    challenges: [
      "Creating a smooth user experience for both employers and freelancers",
      "Implementing complex search and filtering options",
      "Designing an effective rating and review system",
      "Optimizing performance with numerous animations",
    ],
    improvements: [
      "Add video call integration for interviews",
      "Implement escrow payment system",
      "Add skill assessment tests for freelancers",
      "Create a recommendation engine for job matching",
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Project Image */}
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x450?text=Project+Image";
                }}
              />
            </div>
          </div>

          {/* Project Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FiExternalLink className="mr-2" />
                Live Demo
              </a>
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FiGithub className="mr-2" />
                Client Code
              </a>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">
                    •
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Challenges Faced
            </h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">
                    •
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Future Improvements */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Future Improvements
          </h2>
          <ul className="space-y-2">
            {project.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">
                  •
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {improvement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
