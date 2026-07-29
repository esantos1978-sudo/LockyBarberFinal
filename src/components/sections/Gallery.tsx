"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Datos de ejemplo para la galería
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800",
    category: "Corte",
    height: "h-64",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800",
    category: "Barba",
    height: "h-96",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800",
    category: "Color",
    height: "h-72",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800",
    category: "Estilo",
    height: "h-80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1593702295094-aea8c5c13d99?q=80&w=800",
    category: "Corte",
    height: "h-64",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=800",
    category: "Barba",
    height: "h-96",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-red uppercase tracking-[0.2em] text-sm font-semibold">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-white">
              Nuestros Trabajos
            </h2>
          </div>

          {/* Filtros simples */}
          <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["Todos", "Mujer", "Hombre", "Color"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-brand-red hover:border-brand-red hover:text-white transition-all whitespace-nowrap"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Masonry Simulado con Columnas CSS */}
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.category}
                className={`w-full ${item.height} object-cover transition-transform duration-500 group-hover:scale-110`}
              />

              {/* Overlay al hacer hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif italic text-xl">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-brand-red">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
