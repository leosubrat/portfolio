import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
const Skills = () => {
  const skillsList = [
    {
      id: 1,
      title: "Web Design",
      description: [
        "UI/UX Design",
        "Responsive Design",
        "Wireframing",
        "User Research",
      ],
    },
    {
      id: 2,
      title: "Frontend",
      description: ["Javascript", "ReactJS", "NextJS", "CSS3"],
    },
    {
      id: 3,
      title: "Backend",
      description: ["NodeJS", "MongoDB", "ExpressJS", "Vercel"],
    },
    {
      id: 4,
      title: "Soft Skills",
      description: [
        "Effective communication",
        "Collaboration",
        "Commitment",
        "Leadership",
      ],
    },
  ];

  return (
    <>
      <div className="py-25 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
            Skills<span className="primary">.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {skillsList.map((skill) => (
              <div key={skill.id}>
                <motion.h2
                  variants={SlideRight(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                >
                  <span className="primary text-2xl font-bold flex-shrink-0">
                    #
                  </span>
                  {skill.title}
                </motion.h2>
                <motion.ul
                  variants={SlideRight(0.7)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  className="space-y-2"
                >
                  {skill.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 gap-3"
                    >
                      <span className="primary text-xl flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
