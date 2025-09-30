import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiAward } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Front-End Lead',
      organization: 'Students Union, PSG Tech',
      duration: '2024 – Present',
      description:
        'Leading web and app development team, coordinating projects for college-wide events and platforms.',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'secondary',
    },
    {
      title: 'Team Head',
      organization: 'CATERPILLAR AUTONOMY CHALLENGE, PSG Tech',
      duration: '2025 – Present',
      description:
        'Developing autonomous rover with advanced navigation and obstacle detection capabilities.',
      icon: <FiBriefcase className="w-6 h-6" />,
      color: 'primary',
    },
    {
      title: 'Core Member',
      organization: "DD Robocon '24, PSG Tech",
      duration: '2023 – 2024',
      description:
        'Qualified for final round in national robotics competition, contributing to autonomous robot development.',
      icon: <FiAward className="w-6 h-6" />,
      color: 'secondary',
    },
    {
      title: 'Senior Lead & Office Bearer',
      organization: 'Open Lab & Coding Club, PSG Tech',
      duration: '2023 – Present',
      description:
        'Mentoring students in programming and robotics, organizing workshops and technical events.',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'primary',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Leadership & Experience
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-1.5rem]' : 'md:left-[-1.5rem]'
                  } w-12 h-12 rounded-full ${
                    exp.color === 'secondary' ? 'bg-secondary' : 'bg-primary'
                  } flex items-center justify-center text-white shadow-lg z-10 border-4 border-background`}
                >
                  {exp.icon}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-20 md:ml-0 gradient-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-sm text-muted-foreground font-semibold">
                    {exp.duration}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1 text-card-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-secondary font-semibold mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
