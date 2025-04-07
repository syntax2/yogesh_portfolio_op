"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "AI & Machine Learning",
    description:
      "Model fine-tuning, prompt engineering, and code evaluations using LLMs. Strong grasp of Python, Scikit-learn, and NLP workflows.",
    href: "https://github.com/yogeshbhardwaj15/ai-ml-experiments",
  },
  {
    num: "02",
    title: "Computational Cosmology",
    description:
      "Advanced modeling of dark energy, matter creation, and Chaplygin Gas using Python and Mathematica. Published in peer-reviewed journals.",
    href: "https://github.com/yogeshbhardwaj15/cosmology-simulations",
  },
  {
    num: "03",
    title: "Data-Driven Research",
    description:
      "Statistical analysis and visualization using Python, R, SPSS. Work includes Bayesian inference, MCMC techniques, and dataset wrangling.",
    href: "https://github.com/yogeshbhardwaj15/data-astro",
  },
  {
    num: "04",
    title: "AI Code Review & Testing",
    description:
      "LLM output evaluation, testing code for correctness and readability. Fluent in Python, Java, C++, MATLAB — with roles at Turing and Outlier.",
    href: "https://github.com/yogeshbhardwaj15/llm-code-review",
  },
  {
    num: "05",
    title: "Mathematical Modeling",
    description:
      "Solving multilevel transportation and optimization problems using linear programming in MATLAB and Mathematica.",
    href: "https://github.com/yogeshbhardwaj15/transportation-models",
  },
];

const Skills = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((skill, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="flex-1 flex flex-col justify-center gap-6">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {skill.num}
                  </div>
                  <Link
                    href={skill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {skill.title}
                </h2>
                <p className="text-white/60">{skill.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
