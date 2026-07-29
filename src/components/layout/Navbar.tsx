"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Opiniones", href: "#testimonios" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/80 backdrop-blur-md py-4 border-b-0"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="block shrink-0">
          <img
            src="/logo.png"
            alt="Locky Barber Logo"
            width={320}
            height={100}
            className="w-[220px] h-auto md:w-[320px] md:h-auto brightness-0 invert opacity-90 hover:opacity-80 transition-opacity duration-300"
          />
        </Link>

        {/* Menú Escritorio - Centrado */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-brand-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Botón Reservar (Escritorio) - Booksy */}
        <div className="hidden md:block">
          <a
            href="https://booksy.com/es-es/84657_locky-barber-shop_barberia_53009_madrid#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-white hover:text-brand-black text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(193,18,31,0.3)] inline-block"
          >
            Reservar Cita
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-white hover:text-brand-red"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://booksy.com/es-es/84657_locky-barber-shop_barberia_53009_madrid#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white px-8 py-3 rounded-full mt-4 inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservar Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
