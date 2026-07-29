"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Columna Izquierda: Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-red z-0"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop"
              alt="Interior del salón LockyBarber"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-red z-0"></div>
        </motion.div>

        {/* Columna Derecha: Texto y Estadísticas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Más que un corte, <br />
            <span className="text-brand-red italic">un ritual</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            Nacimos con la visión de fusionar la barbería clásica con las
            tendencias contemporáneas más vanguardistas. Nuestro espacio está
            diseñado para que desconectes del mundo y reconectes con tu mejor
            versión.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <span className="block text-4xl font-bold text-white mb-1">
                2.5k+
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                Clientes Felices
              </span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-white mb-1">
                10
              </span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                Años de Experiencia
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
