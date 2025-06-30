import React from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Zap,
  BookOpen,
  Mountain,
  Music,
  Coffee,
} from "lucide-react";

const AboutSection = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      level: 80,
      icon: Code,
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    {
      name: "Backend Development",
      level: 70,
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs", "JWT", "Firebase"],
    },
    {
      name: "Database",
      level: 70,
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Mongoose", "Firestore"],
    },
    {
      name: "Problem Solving",
      level: 85,
      icon: Zap,
      skills: ["Algorithms", "Data Structures", "Debugging", "Optimization"],
    },
    {
      name: "DevOps & Tools",
      level: 65,
      icon: Cloud,
      skills: ["Git", "Docker", "Vercel", "CI/CD", "Postman"],
    },
    {
      name: "Learning",
      level: 90,
      icon: BookOpen,
      skills: [
        "New Technologies",
        "Documentation",
        "Tutorials",
        "Experimentation",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack developer with a passion for creating and continuous
            growth
          </p>
        </div>

        <div className="space-y-16">
          {/* Personal Intro */}
          <div
            className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 p-8 rounded-xl border border-indigo-100 dark:border-indigo-800/50 shadow-sm hover:shadow-md transition-shadow"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Hello, I'm Md. Rakib Islam - Developer & Creative Problem Solver
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                My coding journey started in 2021 when I first discovered the
                "100 Days of Python" course on Udemy. Although I couldn't
                complete it at the time, it planted a seed of curiosity...
              </p>
              <p>
                Everything changed when I enrolled in the Programming Hero
                course...
              </p>
              <p>
                I thrive on{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  creating elegant solutions to complex problems
                </span>
                ...
              </p>
              <p>When I’m not immersed in code, you'll find me:</p>
              <ul className="space-y-2 pl-5 list-disc">
                <li className="flex items-start gap-2">
                  <Mountain className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <span>
                    A passionate gamer — love playing Clash of Clans & Free Fire
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Music className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <span>Listening to music during coding and relaxation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Coffee className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <span>Building cool things — turning ideas into apps</span>
                </li>
              </ul>
              <p>
                I approach both coding and life with{" "}
                <span className="font-medium">curiosity and perseverance</span>.
                Currently excited about [tech] and planning [trip].
              </p>
            </div>
          </div>

          {/* Education */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Education & Journey
            </h4>
            <div className="space-y-6">
              {/* Each Timeline Entry */}
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-indigo-500 before:ring-4 before:ring-indigo-200 dark:before:ring-indigo-900/30">
                <h5 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  HSC - Science | Hossenpur Degree College (2021–2024)
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Foundation in logical thinking & analysis
                </p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-indigo-500 before:ring-4 before:ring-indigo-200 dark:before:ring-indigo-900/30">
                <h5 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  Early Exploration (Self-Taught)
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learned from YouTube courses (Jonas, Apna College, Harry...)
                </p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-indigo-500 before:ring-4 before:ring-indigo-200 dark:before:ring-indigo-900/30">
                <h5 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  Programming Hero Course (2024–Present)
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full-stack MERN focused training and real projects
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              What I Bring to the Table
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((skill, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors duration-300 hover:shadow-md"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                      <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                        {skill.name}
                      </h5>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
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

export default AboutSection;
