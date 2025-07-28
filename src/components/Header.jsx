import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753724996386_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Pilares', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <motion.img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-10 md:h-12 w-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark hover:text-brand-blue font-semibold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-brand-blue text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Fale Conosco
        </a>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-brand-dark">
            <Menu size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <a href="#hero" onClick={toggleMenu}>
                <img
                  src={logoUrl}
                  alt="NTC Brasil Logo"
                  className="h-10 w-auto"
                />
              </a>
              <button onClick={toggleMenu} className="text-brand-dark">
                <X size={30} />
              </button>
            </div>
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full space-y-8 -mt-20"
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  className="text-2xl font-bold text-brand-dark hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                variants={menuItemVariants}
                className="mt-6 bg-brand-blue text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
              >
                Fale Conosco
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
