import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
        {/* Columna 1: Logo + Descripción */}
        <div>
          <div className="text-2xl font-serif font-bold tracking-wider mb-6">
            LOCKY<span className="text-brand-red">&</span>BARBER
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Redefiniendo el concepto de peluquería. Estilo, precisión y atención
            al detalle en cada visita.
          </p>
          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
              Explora
            </h4>
            <ul className="space-y-2 text-gray-500 text-sm">
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
                  href="https://booksy.com/es-es/84657_locky-barber-shop_barberia_53009_madrid#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                >
                  Reservar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna 2: Contacto con datos reales */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">Contacto</h3>
          <div className="space-y-5">
            {/* Dirección */}
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Locky Barber</p>
                <p className="text-gray-400">Calle Alejandro Sánchez, 16</p>
                <p className="text-gray-400">28019, Madrid</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
              <a
                href="tel:+34919124423"
                className="text-gray-400 hover:text-brand-red transition-colors"
              >
                919 124 423
              </a>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-3 text-white/80">
              <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Horario</p>
                <p className="text-gray-400">Lunes - Sábado</p>
                <p className="text-gray-400">10:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 3: Mapa de Google Maps */}
        <div>
          <h3 className="text-white font-serif text-lg mb-6">Ubicación</h3>
          <div className="w-full h-[220px] md:h-[250px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.724!3d40.416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287b2f5c4b0f%3A0x9c8f1c2e3d4a5b6c!2sCalle%20Alejandro%20S%C3%A1nchez%2C%2016%2C%2028019%20Madrid!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Locky Barber"
            />
          </div>
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
