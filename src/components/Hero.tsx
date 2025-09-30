import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameLetters = "Sathish Kumar P".split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay and particles */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background with technology elements"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.43, 0.13, 0.23, 0.96],
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={!shouldReduceMotion ? { 
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.3 }
            } : {}}
            className="relative"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary shadow-glow">
              <img
                src={profilePlaceholder}
                alt="Sathish Kumar P - Full Stack Developer and Production Engineering Student"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <motion.div 
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg"
              animate={!shouldReduceMotion ? {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              {shouldReduceMotion ? (
                "Sathish Kumar P"
              ) : (
                <span className="inline-block">
                  {nameLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              )}
            </h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-secondary font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Developer & Production Engineering Student
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              AI-Driven Manufacturing Innovator
            </motion.p>
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
            <motion.div
              whileHover={!shouldReduceMotion ? { 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 191, 255, 0.5)"
              } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-secondary hover:bg-secondary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={!shouldReduceMotion ? { 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
              } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.95 } : {}}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>
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
              whileHover={!shouldReduceMotion ? { 
                scale: 1.2, 
                rotate: 360,
                color: "hsl(195, 100%, 50%)"
              } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.9 } : {}}
              className="text-white hover:text-secondary transition-colors"
              aria-label="Visit GitHub profile"
            >
              <FiGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sathish-kumar-p-9629463964"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!shouldReduceMotion ? { 
                scale: 1.2, 
                rotate: 360,
                color: "hsl(195, 100%, 50%)"
              } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.9 } : {}}
              className="text-white hover:text-secondary transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <FiLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://sathish-p.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={!shouldReduceMotion ? { 
                scale: 1.2, 
                rotate: 360,
                color: "hsl(195, 100%, 50%)"
              } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.9 } : {}}
              className="text-white hover:text-secondary transition-colors"
              aria-label="Visit portfolio website"
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
