import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative container mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-blue-100 text-brand-blue font-semibold px-4 py-2 rounded-full inline-block mb-6"
          >
            NTC Brasil: Sua Parceira em Construção
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tighter mb-6"
          >
            Construindo o futuro com{' '}
            <span className="gradient-text">qualidade e inovação</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-brand-gray mb-10"
          >
            Transformamos ideias em realidade. Com um compromisso inabalável com
            a excelência, cada projeto é uma prova da nossa paixão por
            construir.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-brand-blue text-white font-bold text-lg py-4 px-8 rounded-xl shadow-strong hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Vamos construir juntos?
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light to-transparent"></div>
    </section>
  );
}
