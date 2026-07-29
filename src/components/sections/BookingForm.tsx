"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Loader2,
  Scissors,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  servicio: string;
  fecha: string;
  hora: string;
  notas: string;
}

const initialFormData: FormData = {
  nombre: "",
  telefono: "",
  email: "",
  servicio: "Corte de Pelo",
  fecha: "",
  hora: "",
  notas: "",
};

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setStatus("success");
        setFormData(initialFormData);
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || "Hubo un error al enviar tu solicitud.");
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Hubo un error al enviar. Por favor, llámanos al 919 124 423.",
      );
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData(initialFormData);
  };

  // --- Pantalla de éxito premium ---
  if (status === "success") {
    return (
      <section className="py-24 px-6 bg-brand-black flex items-center justify-center min-h-[600px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-lg mx-auto bg-green-500/10 border border-green-500/30 rounded-lg p-6 shadow-2xl shadow-black/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-2 ring-green-500/30"
          >
            <CheckCircle className="text-green-400 w-8 h-8" />
          </motion.div>
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            ¡Solicitud Recibida!
          </h3>
          <p className="text-white/60 leading-relaxed text-sm max-w-sm mx-auto">
            Hemos recibido tu solicitud. Te contactaremos pronto para confirmar
            tu cita.
          </p>
          <button
            onClick={resetForm}
            className="mt-8 px-8 py-3 border border-white/30 text-white/80 hover:text-white hover:border-white rounded-full text-sm tracking-wider uppercase transition-all duration-300"
          >
            Reservar otra cita
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="reserva"
      className="py-24 px-6 md:px-12 bg-brand-black relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Contenedor principal */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50">
          {/* Encabezado */}
          <div className="text-center mb-8">
            <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-semibold">
              Reservas
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-2">
              RESERVA TU CITA
            </h2>
            <p className="text-white/60 text-sm">
              Completa el formulario y te confirmaremos por email
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* ===== SECCIÓN 1: TUS DATOS ===== */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-4">
                Tus datos
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre */}
                <div className="mb-5">
                  <label className="block text-sm text-white/80 mb-2 font-medium">
                    Nombre completo <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className={`w-full bg-white/5 border rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all duration-200 ${
                        status === "error" && !formData.nombre
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
                          : "border-white/10 focus:border-brand-red focus:ring-brand-red/50"
                      }`}
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="mb-5">
                  <label className="block text-sm text-white/80 mb-2 font-medium">
                    Teléfono <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      placeholder="+34 600 000 000"
                      className={`w-full bg-white/5 border rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all duration-200 ${
                        status === "error" && !formData.telefono
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/50"
                          : "border-white/10 focus:border-brand-red focus:ring-brand-red/50"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Email (ancho completo) */}
              <div className="mb-5">
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Email{" "}
                  <span className="text-white/30 font-normal">(opcional)</span>
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Separador */}
            <div className="border-t border-white/10 my-6" />

            {/* ===== SECCIÓN 2: TU CITA ===== */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-brand-red font-semibold mb-4">
                Tu cita
              </h3>

              {/* Servicio (ancho completo) */}
              <div className="mb-5">
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Servicio
                </label>
                <div className="relative">
                  <Scissors
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 z-10"
                  />
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-10 py-3 text-white appearance-none focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all duration-200 cursor-pointer"
                  >
                    <option className="bg-brand-black">Corte de Pelo</option>
                    <option className="bg-brand-black">Barba</option>
                    <option className="bg-brand-black">Coloración</option>
                    <option className="bg-brand-black">
                      Tratamiento Capilar
                    </option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                  />
                </div>
              </div>

              {/* Fecha y Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Fecha */}
                <div className="mb-5">
                  <label className="block text-sm text-white/80 mb-2 font-medium">
                    Fecha preferida
                  </label>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white [color-scheme:dark] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Hora */}
                <div className="mb-5">
                  <label className="block text-sm text-white/80 mb-2 font-medium">
                    Hora preferida
                  </label>
                  <div className="relative">
                    <Clock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="time"
                      name="hora"
                      value={formData.hora}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white [color-scheme:dark] focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Notas (ancho completo) */}
              <div className="mb-5">
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Comentarios{" "}
                  <span className="text-white/30 font-normal">(opcional)</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-4 top-5 text-white/40"
                  />
                  <textarea
                    name="notas"
                    rows={3}
                    value={formData.notas}
                    onChange={handleChange}
                    placeholder="¿Alguna preferencia especial?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-all duration-200 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Botón de envío premium */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-serif text-lg tracking-wide rounded-full hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Confirmar Solicitud"
                )}
              </button>
            </div>

            {/* Mensaje de error */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center"
              >
                <p className="text-red-400 text-sm">
                  {errorMessage ||
                    "Hubo un error al enviar. Por favor, llámanos al 919 124 423."}
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
