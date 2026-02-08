import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '@/assets/prominence-bank-logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Client Login', href: '#login' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Cookie Policy', href: '#cookies' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-8">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <motion.a
              href="/"
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logoImage}
                alt="Prominence Bank"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold text-foreground">Prominence Bank</span>
            </motion.a>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Premium banking services with global reach. Your trusted partner for secure cross-border and domestic transfers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Financial District<br />
                  Global Banking Center
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@prominencebank.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  contact@prominencebank.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            © {new Date().getFullYear()} Prominence Bank. All rights reserved.
          </p>
          
          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/70 text-center lg:text-right max-w-2xl">
            Services described are available to Prominence Bank account holders only and are subject to eligibility, KYC/AML, sanctions screening, transaction monitoring, corridor/counterparty acceptance, and final bank approval. This page is informational only and does not constitute an offer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
