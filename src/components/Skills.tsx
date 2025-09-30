import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';
import { FaCode, FaDatabase, FaTools, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="w-6 h-6" />,
      skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Java', icon: <FaCode /> },
        { name: 'C', icon: <FaCode /> },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaServer className="w-6 h-6" />,
      skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="w-6 h-6" />,
      skills: [
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
    },
    {
      title: 'Tools & Software',
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'VS Code', icon: <FaTools /> },
        { name: 'Arduino IDE', icon: <FaTools /> },
        { name: 'Creo', icon: <FaTools /> },
        { name: 'ANSYS Workbench', icon: <FaTools /> },
        { name: 'Automation Studio', icon: <FaTools /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="gradient-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-card-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-background px-3 py-2 rounded-full border border-border hover:border-secondary transition-all duration-300 cursor-default"
                  >
                    <span className="text-secondary">{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Platforms & Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GitHub',
              'Vercel',
              'Google Colab',
              'Google Workspace',
              'Arduino',
              'IoT Systems',
            ].map((platform, index) => (
              <motion.span
                key={platform}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                viewport={{ once: true }}
                className="bg-gradient-accent text-accent-foreground px-6 py-3 rounded-full font-medium shadow-md hover:shadow-glow transition-all duration-300 cursor-default"
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
