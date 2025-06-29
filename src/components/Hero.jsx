import React from "react";
import { motion } from "motion/react";
import { Code, Server, Database, Cpu } from "lucide-react";

const Hero = () => {
  const techStack = [
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "TypeScript", icon: Code },
    { name: "Next.js", icon: Code },
    { name: "MongoDB", icon: Database },
    { name: "Tailwind CSS", icon: Cpu },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Rakib
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              I design and develop modern, scalable, and high-performance web
              applications. My mission is to craft exceptional digital
              experiences from front to back.
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech.name}
                    className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ y: -2 }}
                  >
                    <tech.icon className="w-4 h-4" />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold text-sm md:text-base transition flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#projects"
                className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-md font-semibold text-sm md:text-base transition flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image / Illustration */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-3/4 h-3/4"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Replace with your actual image */}
                    <div className="absolute inset-0 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-1/2 h-1/2 text-indigo-500 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-8 bg-indigo-300/20 dark:bg-indigo-700/20 rounded-full blur-md"></div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-indigo-200/50 dark:border-indigo-800/50 animate-spin-slow"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
