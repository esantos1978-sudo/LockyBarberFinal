"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Tendencias de cortes 2026",
    category: "Estilo",
    date: "15 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cómo cuidar un cabello teñido",
    category: "Consejos",
    date: "10 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Los mejores tratamientos de brillo",
    category: "Cuidado",
    date: "05 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-red uppercase tracking-[0.2em] text-sm font-semibold">
              Nuestro Blog
            </span>
            <h2 className="text-4xl font-serif font-bold mt-2 text-white">
              Consejos de Expertos
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:text-brand-red transition-colors">
            Ver todos los artículos <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl mb-4 relative h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Calendar size={14} /> {post.date}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                Descubre los secretos mejor guardados de nuestros estilistas
                para mantener tu cabello perfecto.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
