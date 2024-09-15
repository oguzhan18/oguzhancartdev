/* eslint-disable react-hooks/rules-of-hooks */
import { motion, MotionValue, useTransform } from "framer-motion";
import { useColorAnimation } from "../../hooks/useColorAnimation";


type ExperiencesSectionProps = {
  isExperiencesInView: boolean;
  isMobile: boolean;
  backgroundGradient: MotionValue<string>;
};
const experiences = [
  {
    title: "Frontend Developer",
    company: "Jengal Software",
    duration: "February 2023 - Present",
    description: "Production of CMS programs that work integrated with SEO tools, and production of designs produced from platforms such as figma - adobe xd. Construction of a large E-commerce website. I used React, Angular, NextJS, VueJS and Laravel Blade frameworks. I used TypeScript and JavaScript.",
  },
  {
    title: "Frontend Developer",
    company: "AIFA SOFT",
    duration: "September 2021 - February 2023",
    description: "I made web applications with Angular. I worked in financial technologies, creating websites and ERP modules for jewelers and foreign exchange dealers, mobile applications, and price screens.",
  },
  {
    title: "Trainee Frontend Developer",
    company: "AIFA SOFT",
    duration: "September 2020 - June 2021",
    description: "I designed web designs with Vue JS, contributed to the development of the chat application with Flutter, and wrote APIs with SQL and .Net. I created a dashboard and developed web applications with .Net Core and VueJS.",
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Freelance",
    duration: "July 2015 - September 2021",
    description: "I have developed software that meets the needs of many companies. I have provided services to many companies in different sectors such as farmer software, real estate software, LED signage software, accounting software, PLC software, machine programming, requested mobile applications, and requested websites.",
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: custom * 0.2,
    },
  }),
};

const Experiences: React.FC<ExperiencesSectionProps> = () => {
  const { hue1, hue2 } = useColorAnimation();

  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <motion.h2
        variants={fadeInUpVariants}
        custom={6}
        className="khula-semibold text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12"
      >
        Experiences
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            custom={7 + index}
            className="border-b border-gray-700 pb-6 last:border-b-0"
          >
            <motion.h3
              className="khula-semibold text-2xl md:text-3xl"
              style={{
                backgroundImage: useTransform(
                  [hue1, hue2],
                  ([h1, h2]) =>
                    `linear-gradient(90deg, hsl(${h1}, 100%, 50%), hsl(${h2}, 100%, 50%))`,
                ),
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {exp.title}
            </motion.h3>
            <p className="poppins-light-italic text-black mt-2">{exp.company} - {exp.duration}</p>
            <p className="poppins-regular mt-4 text-black">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
