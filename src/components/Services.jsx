import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BarChart, HardHat, Lightbulb } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const servicePillars = [
    {
      icon: <Layers className="h-10 w-10 text-brand-blue" />,
      title: 'Planejamento Estratégico',
      description:
        'Analisamos cada variável do projeto para criar um plano sólido e eficiente, garantindo a otimização de recursos e tempo.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-brand-blue" />,
      title: 'Execução de Excelência',
      description:
        'Nossa equipe altamente qualificada utiliza as melhores práticas e materiais para garantir uma construção de qualidade superior.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-brand-blue" />,
      title: 'Inovação e Tecnologia',
      description:
        'Incorporamos tecnologias construtivas modernas para entregar projetos mais sustentáveis, inteligentes e duradouros.',
    },
    {
      icon: <BarChart className="h-10 w-10 text-brand-blue" />,
      title: 'Gestão Transparente',
      description:
        'Mantemos uma comunicação clara e constante, oferecendo relatórios detalhados e visibilidade total sobre o andamento da obra.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-brand-light">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4"
          >
            Nossos Pilares Fundamentais
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="max-w-3xl mx-auto text-lg text-brand-gray"
          >
            Nossa atuação é guiada por princípios que garantem a entrega de
            valor em cada etapa do seu projeto.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {servicePillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-subtle flex flex-col md:flex-row items-start gap-6 hover:shadow-strong hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                {pillar.icon}
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-brand-dark mb-3">
                  {pillar.title}
                </h3>
                <p className="text-brand-gray text-base flex-grow">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
