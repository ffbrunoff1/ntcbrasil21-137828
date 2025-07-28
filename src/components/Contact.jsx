import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao enviar a mensagem.');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro no envio:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Vamos <span className="gradient-text">Construir Juntos?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-gray">
            Entre em contato para orçamentos, dúvidas ou para iniciar seu
            próximo grande projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-brand-light p-8 md:p-10 rounded-2xl shadow-subtle"
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-brand-blue text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="mr-2" />
                  Mensagem enviada com sucesso!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="mr-2" />
                  Ocorreu um erro. Tente novamente.
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-blue-50 p-8 rounded-2xl flex items-start gap-6">
              <Phone size={28} className="text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-brand-dark">Telefone</h4>
                <p className="text-brand-gray">
                  Fale diretamente com nossa equipe.
                </p>
                <a
                  href="tel:+5544991040774"
                  className="text-brand-blue font-semibold text-lg hover:underline"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl flex items-start gap-6">
              <Mail size={28} className="text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-brand-dark">E-mail</h4>
                <p className="text-brand-gray">
                  Para propostas e informações detalhadas.
                </p>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-brand-blue font-semibold text-lg hover:underline"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl flex items-start gap-6">
              <MapPin
                size={28}
                className="text-brand-blue mt-1 flex-shrink-0"
              />
              <div>
                <h4 className="text-xl font-bold text-brand-dark">Endereço</h4>
                <p className="text-brand-gray">
                  Venha nos visitar e tomar um café.
                </p>
                <p className="text-brand-dark font-semibold text-lg">
                  Padre Lebret 801, G05 Bloco 03
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
