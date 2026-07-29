"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Droplets,
  UserCheck,
  Sparkles,
  Award,
  Eye,
  Palette,
  Clock,
} from "lucide-react";

const services = [
  {
    title: "Corte Degradado",
    description: "Técnica de degradado perfecto con acabado profesional.",
    price: "15,00 €",
    duration: "30 min",
    icon: <Scissors className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Degradado y Barba",
    description: "Degradado impecable + perfilado de barba completo.",
    price: "19,00 €",
    duration: "40 min",
    icon: <UserCheck className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Corte Caballero + Lavado",
    description: "Corte clásico o moderno con lavado incluido.",
    price: "15,00 €",
    duration: "30 min",
    icon: <Droplets className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Degradado y Diseño",
    description: "Degradado con líneas y diseños personalizados.",
    price: "16,00 €",
    duration: "35 min",
    icon: <Sparkles className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Perfilado de Barba",
    description: "Perfilado preciso con navaja y acabado perfecto.",
    price: "10,00 €",
    duration: "30 min",
    icon: <UserCheck className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Corte Jubilado",
    description: "Corte cómodo y adaptado a tu estilo de vida.",
    price: "10,00 €",
    duration: "30 min",
    icon: <Award className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Perfilado de Ceja",
    description: "Diseño y perfilado de cejas con precisión.",
    price: "3,00 €",
    duration: "5 min",
    icon: <Eye className="w-8 h-8 text-brand-red" />,
  },
  {
    title: "Descoloración",
    description: "Decoloración capilar profesional con productos premium.",
    price: "70,00 €",
    duration: "3h",
    icon: <Palette className="w-8 h-8 text-brand-red" />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 md:px-12 bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-[0.2em] text-sm font-semibold">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-white">
            Maestría en cada detalle
          </h2>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-brand-black p-8 rounded-xl border border-white/5 hover:border-brand-red/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Icono de fondo decorativo */}
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                {service.icon}
              </div>

              <div className="relative z-10">
                <div className="mb-4 p-3 bg-brand-gray w-fit rounded-lg group-hover:bg-brand-red/10 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-2 text-white group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white">
                      {service.price}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>
                  <button
                    data-service={service.title}
                    onClick={() => console.log(`Reservar: ${service.title}`)}
                    className="text-sm font-medium underline decoration-brand-red underline-offset-4 hover:text-brand-red transition-colors"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
