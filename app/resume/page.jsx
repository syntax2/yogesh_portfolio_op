"use client";
import React from "react";
// import { FaDatabase } from "react-icons/fa";
import {
  FaPython,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaReact,
  FaNodeJs,
  FaRProject,
  FaDatabase,
  FaRegFileAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMatlab,
  SiJupyter,
  SiMysql,
  SiPytorch,
  SiScikitlearn,
  SiCoursera,
  SiUdemy,
  SiTensorflow,
  SiLatex,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

// === About Section ===
const about = {
  title: "About me",
  description:
    "I’m a researcher and AI practitioner exploring the large-scale structure of the universe through computational modeling and machine learning. My focus lies in using advanced mathematical tools and AI systems to uncover insights in cosmology and data-driven science.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yogesh Bhardwaj",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-9467494380",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "yogeshbhardwaj1597@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// === Experience Section ===
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Bridging research and engineering, I’ve worked with academic institutions and AI startups. My focus has been on AI model training, computational cosmology, and mathematical modeling.",
  items: [
    {
      company: "Turing (Remote)",
      position: "LLM Senior Engineer",
      duration: "July 2024 – Present",
    },
    {
      company: "Outlier (Remote, San Francisco)",
      position: "AI-Training & Code Evaluator",
      duration: "Nov 2024 – Present",
    },
    {
      company: "Delhi Technological University",
      position: "Research Fellow – Applied Mathematics",
      duration: "Jan 2022 – Present",
    },
    {
      company: "I.A.S. Maths Academy",
      position: "Mathematics Specialist",
      duration: "Jan 2023 – Aug 2023",
    },
    {
      company: "Course Hero (Remote, US)",
      position: "Subject Matter Expert, Reviewer",
      duration: "Jan 2020 – Jan 2021",
    },
    {
      company: "Chegg (Delhi)",
      position: "Subject Matter Expert",
      duration: "Feb 2020 – Dec 2020",
    },
  ],
};

// === Education Section ===
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I hold a Doctorate in Applied Mathematics with research experience in cosmology, dark energy models, and computational science.",
  items: [
    {
      institution: "Delhi Technological University",
      degree: "PhD in Applied Mathematics",
      duration: "2022 – Ongoing",
    },
    {
      institution: "Delhi Technological University",
      degree: "M.Sc. in Applied Mathematics",
      duration: "2019 – 2021",
    },
    {
      institution: "University of Delhi",
      degree: "B.Sc. in Science",
      duration: "2015 – 2018",
    },
    {
      institution: "Coursera / Udemy / Self-learning",
      degree: "Data Science & Python Specializations",
      duration: "2020 – 2024",
    },
  ],
};

// === Skills Section ===
const skills = {
  title: "My skills",
  description:
    "Strong background in research computing, machine learning, LLMs, and data science. Comfortable in both academic modeling and real-world AI applications.",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-learn",
    },
    {
      icon: <FaRProject />,
      name: "R",
    },
    {
      icon: <FaDatabase />,
      name: "MATLAB",
    },
    {
      icon: <SiJupyter />,
      name: "Jupyter",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiCoursera />,
      name: "Coursera Certified",
    },
    {
      icon: <SiUdemy />,
      name: "Udemy Certified",
    },
    {
      icon: <FaRegFileAlt />,
      name: "LaTeX",
    },
    {
      icon: <SiLatex />,
      name: "Scientific Writing",
    },
  ],
};

const Resume = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <Tabs
              defaultValue="experience"
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>
              <div className="min-h-[70vh] w-full">
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-8 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-8 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                      </p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </TabsContent>

                <TabsContent
                  value="about"
                  className="w-full text-center xl:text-left"
                >
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center xl:justify-start gap-4"
                          >
                            <span className="text-white/60">
                              {item.fieldName}
                            </span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
