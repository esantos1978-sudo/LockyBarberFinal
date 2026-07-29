"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function BookingForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulamos envío a servidor
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  if (formStatus === "success") {
    return (
      <section className="py-24 px-6 bg-brand-black flex items-center justify-center min-h-[600px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md p-8 bg-brand-gray rounded-2xl border border-brand-red/30"
        >
          <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="text-white w-8 h-8" />
          </div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            ¡Solicitud Recibida!
          </h3>
          <p className="text-gray-400">
            Te hemos enviado un correo de confirmación. Nos pondremos en
            contacto contigo en breve para confirmar la hora exacta.
          </p>
          <button
            onClick={() => setFormStatus("idle")}
            className="mt-8 text-brand-red hover:text-white underline underline-offset-4"
          >
            Realizar otra reserva
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="reserva"
      className="py-24 px-6 md:px-12 bg-brand-black relative"
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gray to-transparent opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-brand-gray p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-brand-red uppercase tracking-[0.2em] text-sm font-semibold">
              Agenda tu Cita
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 text-white">
              Reserva tu momento
            </h2>
            <p className="text-gray-400 mt-2">
              Te confirmaremos disponibilidad en menos de 1 hora
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1 flex items-center gap-2">
                  <User size={14} /> Nombre
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-red focus:outline-none transition-colors text-white placeholder-gray-600"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1 flex items-center gap-2">
                  <Phone size={14} /> Teléfono
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-red focus:outline-none transition-colors text-white placeholder-gray-600"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Servicio */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Servicio</label>
                <select className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-red focus:outline-none transition-colors text-gray-300">
                  <option>Corte de Pelo</option>
                  <option>Barba</option>
                  <option>Coloración</option>
                  <option>Tratamiento Capilar</option>
                </select>
              </div>

              {/* Fecha */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1 flex items-center gap-2">
                  <Calendar size={14} /> Fecha Preferida
                </label>
                <input
                  type="date"
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-red focus:outline-none transition-colors text-gray-300 [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Comentarios */}
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1 flex items-center gap-2">
                <MessageSquare size={14} /> Comentarios (Opcional)
              </label>
              <textarea
                rows={3}
                className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 focus:border-brand-red focus:outline-none transition-colors text-white placeholder-gray-600"
                placeholder="¿Alguna preferencia especial?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-brand-red hover:bg-white hover:text-brand-red text-white font-bold py-4 rounded-lg transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === "submitting"
                ? "Enviando..."
                : "CONFIRMAR SOLICITUD"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
