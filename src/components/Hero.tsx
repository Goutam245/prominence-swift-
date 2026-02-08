import { motion } from 'framer-motion';
import { Globe, Shield, Network, Headphones } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: 'Bank-Grade Security' },
    { icon: Network, text: 'Global Network' },
    { icon: Headphones, text: '24/7 Support' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden marble-texture">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-[120%] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent rotate-[-35deg] origin-top"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 left-1/2 w-1 h-[120%] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rotate-[-25deg] origin-top"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-1 h-[120%] bg-gradient-to-b from-primary/25 via-primary/10 to-transparent rotate-[-40deg] origin-top"
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Direct Bank Transfer{' '}
              <span className="gradient-text text-glow">(SWIFT)</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Secure cross-border and domestic bank transfers with global reach
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="btn-hero-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Open an Account
              </motion.button>
              <motion.button
                className="btn-hero-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="trust-badge"
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary) / 0.5)' }}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* SWIFT Globe Illustration */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Middle Ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Inner Glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-xl" />
              
              {/* Globe Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative">
                  <Globe className="w-32 h-32 md:w-40 md:h-40 text-primary" strokeWidth={0.5} />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Globe className="w-32 h-32 md:w-40 md:h-40 text-primary/50 blur-lg" strokeWidth={0.5} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbiting Dots */}
              {[0, 72, 144, 216, 288].map((rotation, index) => (
                <motion.div
                  key={index}
                  className="absolute w-3 h-3 bg-primary rounded-full shadow-glow"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 -150px',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: (index * 20) / 5,
                  }}
                  initial={{ rotate: rotation }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
