"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Carlos M.",
    role: "Cliente habitual",
    text: "La mejor experiencia que he tenido en una barbería. El ambiente es increíble y el corte fue exactamente lo que pedí.",
    rating: 5,
  },
  {
    id: 2,
    name: "Laura G.",
    role: "Coloración",
    text: "Llevaba años buscando a alguien que entendiera mi tipo de cabello para las mechas. ¡Por fin lo he encontrado! Totalmente recomendado.",
    rating: 5,
  },
  {
    id: 3,
    name: "David R.",
    role: "Ritual Barba",
    text: "El servicio de barba con toalla caliente es otro nivel. Sales de allí sintiéndote como nuevo. Profesionalidad 100%.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play del slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonios"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Imagen de fondo: instrumentos de peluquería */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/barber-tools.jpg"
          alt="Instrumentos de peluquería"
          fill
          className="object-cover"
          quality={70}
        />
        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Valoración Media Destacada */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F0F0F] px-6 py-3 rounded-full border border-white/10">
            <Star className="w-5 h-5 text-brand-red fill-brand-red" />
            <span className="text-2xl font-bold text-white">4.9/5</span>
            <span className="text-gray-400 text-sm ml-2">
              Basado en cientos de reseñas
            </span>
          </div>
        </div>

        {/* Slider de Tarjetas - altura fija para evitar saltos */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[320px] md:h-[280px]">
            <AnimatePresence mode="wait">
              {testimonials.map((item, index) =>
                activeIndex === index ? (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#0F0F0F] p-8 md:p-12 rounded-2xl border border-white/5 shadow-xl text-center"
                  >
                    <Quote className="w-10 h-10 text-brand-red/30 mx-auto mb-6" />
                    <p className="text-xl md:text-2xl font-serif italic text-gray-200 mb-8 leading-relaxed">
                      "{item.text}"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {item.name}
                      </h4>
                      <span className="text-sm text-brand-red uppercase tracking-wider">
                        {item.role}
                      </span>
                    </div>

                    {/* Estrellas individuales */}
                    <div className="flex justify-center gap-1 mt-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-brand-red fill-brand-red"
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
          </div>

          {/* Indicadores (Puntos) - FUERA del contenedor de altura variable */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-brand-red w-8"
                    : "bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
