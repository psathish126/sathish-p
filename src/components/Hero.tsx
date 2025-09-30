import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary shadow-glow">
              <img
                src={profilePlaceholder}
                alt="Sathish Kumar P"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">👋</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Sathish Kumar P
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary font-semibold">
              Full Stack Developer & Production Engineering Student
            </h2>
            <p className="text-xl text-white/90">
              AI-Driven Manufacturing Innovator
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl text-lg text-white/80 leading-relaxed"
          >
            Motivated Production Engineering student and Full Stack Developer with expertise in
            AI-driven manufacturing innovation. Proven track record competing in 30+ robotics
            competitions with multiple wins at state and national levels. Experienced project
            leader driving digital transformation through web development, machine learning, and
            automation solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-secondary hover:bg-secondary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-6"
          >
            <motion.a
              href="https://github.com/sathish126"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-secondary transition-colors"
            >
              <FiGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sathish-kumar-p-9629463964"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-secondary transition-colors"
            >
              <FiLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://sathish-p.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-secondary transition-colors"
            >
              <FiExternalLink className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
