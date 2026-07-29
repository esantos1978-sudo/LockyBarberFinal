import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        {/* Branding */}
        <div>
          <div className="text-2xl font-serif font-bold tracking-wider mb-6">
            LOCKY<span className="text-brand-red">&</span>BARBER
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefiniendo el concepto de peluquería. Estilo, precisión y atención
            al detalle en cada visita.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="font-bold mb-6 text-white">Explora</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>
              <a href="#" className="hover:text-brand-red transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="hover:text-brand-red transition-colors"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#galeria"
                className="hover:text-brand-red transition-colors"
              >
                Galería
              </a>
            </li>
            <li>
              <a
                href="#reserva"
                className="hover:text-brand-red transition-colors"
              >
                Reservar
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold mb-6 text-white">Contacto</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-red" /> Calle Ejemplo 123,
              Madrid
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-red" /> +34 912 345 678
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-red" /> citas@lockybarber.es
            </li>
          </ul>
        </div>

        {/* Horario */}
        <div>
          <h4 className="font-bold mb-6 text-white">Horario</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li className="flex justify-between">
              <span>Lun - Vie</span> <span>10:00 - 20:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sábado</span> <span>09:00 - 18:00</span>
            </li>
            <li className="flex justify-between text-brand-red">
              <span>Domingo</span> <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© 2026 LockyBarber. Todos los derechos reservados.</p>

        {/* Iconos SVG directos para evitar errores de importación */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-red transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="hover:text-brand-red transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
