"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34603148153?text=Hola,%20tengo%20una%20consulta%20sobre%20Locky%20Barber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center group"
      aria-label="¿Tienes dudas? Escríbenos por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-bounce" />
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        ¿Tienes dudas? Escríbenos
      </span>
    </a>
  );
}
