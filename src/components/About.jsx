import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShieldCheck, Users } from 'lucide-react';
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 20, transition: { duration: 0.6 } },
  };
  const features = [
    {
      icon: <ShieldCheck size={32} className="text-brand-blue" />,
      title: 'Segurança Inegociável',
      description:
        'Implementamos os mais rigorosos padrões de segurança para proteger nossa equipe, clientes e o seu investimento.',
    },
    {
      icon: <Users size={32} className="text-brand-blue" />,
      title: 'Parceria e Confiança',
      description:
        'Construímos mais do que edifícios; construímos relacionamentos duradouros baseados na transparência e confiança mútua.',
    },
    {
      icon: <Building size={32} className="text-brand-blue" />,
      title: 'Excelência em Execução',
      description:
        'Nossa experiência se traduz em uma execução impecável, entregando projetos no prazo e com a máxima qualidade.',
    },
  ];
  return (
    <section id="about" className="section-padding bg-white">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4"
          >
            Sobre a <span className="gradient-text">NTC Brasil</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-brand-gray"
          >
            Somos uma empresa de construção movida pela paixão de transformar
            desafios em marcos de sucesso. Nossa missão é entregar projetos
            excepcionais que combinam design inovador, engenharia de ponta e um
            compromisso absoluto com a satisfação do cliente.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-light p-8 rounded-xl shadow-subtle text-center flex flex-col items-center"
              custom={index}
              variants={itemVariants}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-gray flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
