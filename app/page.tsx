"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import BookingForm from "@/components/sections/BookingForm";
import BlogPreview from "@/components/sections/BlogPreview";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { motion } from "framer-motion";
import { CheckCircle, Award, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Fondo con imagen y overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Salón Premium"
            className="w-full h-full object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs tracking-[0.2em] uppercase mb-6 text-gray-300"
          >
            Excelencia desde 2016
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
          >
            Tu estilo <br />
            <span className="italic text-brand-red">comienza aquí</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Expertos en cortes, coloración y cuidado capilar. Una experiencia
            sensorial diseñada para quienes no aceptan menos que la perfección.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="bg-brand-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_20px_rgba(193,18,31,0.4)]">
              Reservar Ahora
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Trabajos
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-red" /> +2.000 Clientes
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" /> 10 Años Exp.
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-red" /> Productos Pro
            </div>
          </motion.div>
        </div>
      </main>

      <VideoShowcase />

      <Services />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <BlogPreview />

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
