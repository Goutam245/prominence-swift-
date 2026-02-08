import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Content - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Service Overview
            </motion.span>

            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Global Bank Transfers, <span className="gradient-text">Simplified</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Direct Bank Transfer is the standard way to move funds between bank accounts domestically and internationally. International wires are transmitted through the SWIFT messaging network, enabling payments to beneficiary accounts worldwide.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With Prominence Bank, you gain access to a secure, compliant, and efficient transfer network backed by bank-grade verification and global reach through the SWIFT infrastructure.
            </motion.p>
          </motion.div>

          {/* World Map Animation - 2 columns */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />

              {/* Network visualization */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
              >
                {/* Connection lines */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.path
                    d="M80 200 Q 200 100 320 180"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                  <motion.path
                    d="M100 280 Q 200 200 300 260"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                  <motion.path
                    d="M150 120 Q 200 180 250 140"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </motion.g>

                {/* Network nodes */}
                {[
                  { cx: 80, cy: 200, delay: 0.7 },
                  { cx: 150, cy: 120, delay: 0.8 },
                  { cx: 200, cy: 200, delay: 0.9 },
                  { cx: 250, cy: 140, delay: 1 },
                  { cx: 320, cy: 180, delay: 1.1 },
                  { cx: 100, cy: 280, delay: 1.2 },
                  { cx: 300, cy: 260, delay: 1.3 },
                  { cx: 180, cy: 320, delay: 1.4 },
                ].map((node, index) => (
                  <motion.g key={index}>
                    {/* Pulse effect */}
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r="20"
                      fill="url(#nodeGlow)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [1, 1.5, 1], 
                        opacity: [0.3, 0.6, 0.3] 
                      } : {}}
                      transition={{ 
                        duration: 2, 
                        delay: node.delay,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                    {/* Node */}
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r="8"
                      fill="hsl(187 100% 50%)"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: node.delay }}
                    />
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r="4"
                      fill="hsl(213 50% 7%)"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: node.delay + 0.1 }}
                    />
                  </motion.g>
                ))}

                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(187 100% 50%)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(187 100% 50%)" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="nodeGlow">
                    <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(187 100% 50%)" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              {/* SWIFT Label */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <span className="text-3xl font-bold gradient-text">SWIFT</span>
                <p className="text-sm text-muted-foreground mt-1">Network</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
