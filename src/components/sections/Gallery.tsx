"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, ZoomIn } from "lucide-react";

// 6 fotos originales (JPG/PNG)
const galleryItems = [
  {
    id: 1,
    src: "/Images/gallery/corte2_mod.jpg",
    category: "Corte Moderno",
  },
  {
    id: 2,
    src: "/Images/gallery/corte17_mod.jpg",
    category: "Estilo Clásico",
  },
  {
    id: 3,
    src: "/Images/gallery/corte28_mod.jpg",
    category: "Degradado",
  },
  {
    id: 4,
    src: "/Images/gallery/corte_chica_trenza_mod.png",
    category: "Trenzas",
  },
  {
    id: 5,
    src: "/Images/gallery/corte_cunha.jpeg",
    category: "Corte Mujer",
  },
  {
    id: 6,
    src: "/Images/gallery/corte_verde.png",
    category: "Color",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryItems.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryItems.length) % galleryItems.length,
      );
    }
  };

  return (
    <section
      id="galeria"
      className="py-24 px-6 md:px-12 bg-brand-black relative"
    >
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <span className="text-brand-red uppercase tracking-[0.3em] text-sm font-semibold">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-3 text-white">
              Nuestros <span className="italic text-brand-red">Trabajos</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-md text-sm leading-relaxed">
              Cada corte cuenta una historia. Descubre nuestra galería de
              transformaciones reales.
            </p>
          </div>

          {/* Contador de fotos */}
          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-8 h-px bg-gray-700" />
            <span>{galleryItems.length} trabajos</span>
          </div>
        </motion.div>

        {/* Grid Uniforme Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-brand-black"
              onClick={() => openLightbox(index)}
            >
              {/* Imagen con altura uniforme */}
              <img
                src={item.src}
                alt={item.category}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>

              {/* Esquina decorativa */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/40 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-white/0 group-hover:border-white/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Premium */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white hover:scale-110 transition-all z-10"
            >
              <X size={28} />
            </button>

            {/* Navegación izquierda */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-all hover:scale-110"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Imagen ampliada */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].category}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl shadow-black/50"
              />

              {/* Info inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <p className="text-white font-serif italic text-lg">
                  {galleryItems[selectedIndex].category}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {selectedIndex + 1} / {galleryItems.length}
                </p>
              </div>
            </motion.div>

            {/* Navegación derecha */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-all hover:scale-110"
            >
              <ChevronRight size={40} />
            </button>

            {/* Indicador de posición (escritorio) */}
            <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === selectedIndex
                      ? "bg-brand-red w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
