import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Users } from 'lucide-react';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary/20 to-accent/10" />
        
        {/* Geometric Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <Users className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Become an account holder to{' '}
            <span className="gradient-text">access this service</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join Prominence Bank for exclusive premium banking services and global reach through our SWIFT network.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background font-bold text-lg px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Open an Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="inline-flex items-center justify-center gap-3 border-2 border-foreground text-foreground font-bold text-lg px-10 py-5 rounded-xl hover:bg-foreground/10 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
