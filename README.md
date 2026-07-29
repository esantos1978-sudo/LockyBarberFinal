# Locky Barber 💈

Landing page premium para **Locky Barber**, una peluquería/barbería de lujo en Madrid. Diseño minimalista y oscuro con acentos rojos, construida con Next.js 16 (App Router) y animaciones fluidas con Framer Motion.

## ✨ Características

| Característica                    | Descripción                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| **VideoShowcase cinematográfico** | Banner con video autoplay en bucle, overlay gradiente y tipografía serif premium         |
| **Servicios reales**              | 8 servicios con precios, duración, iconos Lucide y atributo `data-service` preparado     |
| **Galería interactiva**           | Lightbox modal con imágenes reales del negocio, navegación por teclado y grid responsive |
| **Optimización WebP**             | Script Sharp que convierte imágenes a WebP (calidad 85) y genera gallery-images.json     |
| **Testimonios con fondo**         | Carrusel sin saltos visuales con fondo de instrumentos de peluquería y overlay oscuro    |
| **Footer profesional**            | Información real de contacto, horario y mapa de Google Maps embebido                     |
| **Formulario de reserva**         | Formulario funcional con validación y estados de envío                                   |
| **Blog Preview**                  | Vista previa de artículos con categorías y fechas                                        |
| **WhatsApp Float**                | Botón flotante de contacto directo                                                       |
| **Navbar responsivo**             | Menú adaptable con backdrop-blur, logo nativo y menú hamburguesa en móvil                |
| **Fondo oscuro global**           | Sin líneas blancas entre secciones gracias a `background-color: #0f0f0f` en `<html>`     |

## 🛠️ Tecnologías

| Tecnología                                      | Versión                        |
| ----------------------------------------------- | ------------------------------ |
| [Next.js](https://nextjs.org/)                  | 16.2.12 (App Router)           |
| [React](https://react.dev/)                     | 19.2.4                         |
| [TypeScript](https://www.typescriptlang.org/)   | 5.x                            |
| [Tailwind CSS](https://tailwindcss.com/)        | 4.x                            |
| [Framer Motion](https://www.framer.com/motion/) | 12.43.0                        |
| [Lucide React](https://lucide.dev/)             | 1.27.0                         |
| [Sharp](https://sharp.pixelplumbing.com/)       | 0.x (optimización de imágenes) |

## 🚀 Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/locky-barber.git
cd locky-barber

# 2. Instalar dependencias
npm install

# 3. Iniciar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

## 📁 Estructura del proyecto

```
locky-barber/
├── app/                              # App Router (raíz real de la aplicación)
│   ├── favicon.ico                   # Favicon
│   ├── globals.css                   # Estilos globales y variables CSS
│   ├── layout.tsx                    # Layout raíz (fuentes, metadatos, bg oscuro)
│   └── page.tsx                      # Página principal (todas las secciones)
│
├── public/                           # Assets servidos estáticamente
│   ├── logo.png                      # Logo de la marca (669x373px)
│   ├── images/
│   │   ├── gallery/                  # Imágenes de la galería
│   │   │   ├── barber-tools.jpg      # Fondo de testimonios
│   │   │   ├── *.jpg / *.jpeg        # Fotos reales de trabajos
│   │   │   ├── webp/                 # Versiones optimizadas en WebP
│   │   │   └── gallery-images.json   # Lista de imágenes optimizadas
│   │   └── *.jpeg / *.jpg            # Imágenes adicionales
│   └── videos/
│       └── showcase.mp4              # Video de showcase
│
├── scripts/
│   └── optimize-gallery.mjs          # Script de optimización a WebP con Sharp
│
├── src/
│   ├── components/
│   │   ├── layout/                   # Componentes de estructura
│   │   │   ├── Navbar.tsx            # Barra de navegación con logo nativo
│   │   │   ├── Footer.tsx            # Pie de página con contacto y mapa
│   │   │   └── WhatsAppFloat.tsx     # Botón flotante de WhatsApp
│   │   │
│   │   ├── sections/                 # Secciones de la landing page
│   │   │   ├── VideoShowcase.tsx     # Banner de video autoplay
│   │   │   ├── Services.tsx          # Tarjetas de servicios con precios
│   │   │   ├── Gallery.tsx           # Galería con lightbox y grid responsive
│   │   │   ├── BookingForm.tsx       # Formulario de reserva
│   │   │   ├── Testimonials.tsx      # Carrusel de reseñas con fondo
│   │   │   ├── BlogPreview.tsx       # Vista previa de artículos
│   │   │   └── About.tsx             # Sección "Sobre nosotros"
│   │   │
│   │   └── ui/                       # Componentes reutilizables
│   │       ├── AnimatedCounter.tsx    # Contador animado
│   │       ├── Button.tsx            # Botón genérico
│   │       └── Sectionheading.tsx    # Encabezado de sección
│   │
│   ├── lib/
│   │   ├── utils.ts                  # Utilidades (cn, etc.)
│   │   └── validations.ts            # Esquemas de validación
│   │
│   └── app/                          # ⚠️ Copia duplicada (no utilizada)
│       ├── page.tsx
│       └── layout.tsx
│
├── next.config.ts                    # Configuración de Next.js
├── tsconfig.json                     # Configuración de TypeScript
├── tailwind.config.ts                # Configuración de Tailwind
└── package.json                      # Dependencias y scripts
```

## 📜 Scripts disponibles

| Comando                             | Descripción                                       |
| ----------------------------------- | ------------------------------------------------- |
| `npm run dev`                       | Inicia servidor de desarrollo en `localhost:3000` |
| `npm run build`                     | Compila para producción                           |
| `npm run start`                     | Inicia servidor de producción                     |
| `npm run lint`                      | Ejecuta ESLint                                    |
| `node scripts/optimize-gallery.mjs` | Optimiza imágenes de la galería a WebP            |

## 🎨 Diseño y estilo

- **Fondo**: `#0F0F0F` (negro carbón) — aplicado globalmente en `<html>` para evitar líneas blancas
- **Acento principal**: `#C1121F` (rojo intenso)
- **Acento secundario**: `#C9A84C` (dorado)
- **Tipografía**: Playfair Display (serif) + Poppins (sans-serif)
- **Animaciones**: Framer Motion con delays escalonados y `whileInView`

## 📝 Notas técnicas

### 1. Logo en el Navbar (`<img>` nativa vs `next/image`)

El logo usa una etiqueta `<img>` nativa en lugar del componente `<Image />` de Next.js. Esto se debe a que el logo requiere filtros CSS (`brightness-0 invert`) para adaptarse al fondo oscuro. Next.js `Image` lanza un error de hidratación cuando se modifican las dimensiones mediante CSS, rompiendo la ejecución del resto de componentes.

```tsx
// ✅ Solución actual
<img src="/logo.png" alt="Locky Barber" className="brightness-0 invert" />

// ❌ Evitar: next/image con filtros CSS
<Image src="/logo.png" alt="Locky Barber" className="brightness-0 invert" />
```

Tamaño del logo: `220px` en móvil, `320px` en desktop (suficiente para la resolución original de 669x373px).

### 2. Archivos duplicados (`app/` vs `src/app/`)

El proyecto tiene dos archivos `page.tsx`:

- **`app/page.tsx`** → El que realmente usa la aplicación (layout raíz en `app/layout.tsx`)
- **`src/app/page.tsx`** → Copia no utilizada (el alias `@` apunta a `src/`, pero el layout raíz está en `app/`)

**Siempre editar `app/page.tsx`** para cambios en la página principal.

### 3. VideoShowcase (código mínimo funcional)

El componente de video está deliberadamente simplificado:

- Sin estados complejos, sin `useEffect`, sin `onError`
- Sin Framer Motion en el contenedor principal
- El video se renderiza siempre, sin condicionales
- Esto evita errores asíncronos que rompían el renderizado

```tsx
// Estructura base probada y funcional
<div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/showcase.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-b ... z-10 flex ...">
    {/* Texto superpuesto */}
  </div>
</div>
```

### 4. `suppressHydrationWarning` en layout.tsx

Se añadió `suppressHydrationWarning` a la etiqueta `<html>` para evitar warnings de hidratación causados por extensiones del navegador (como QuillBot) que modifican el DOM. Esto no afecta al funcionamiento de la aplicación.

### 5. Galería con Lightbox

La galería (`Gallery.tsx`) incluye:

- **Detección automática**: Escanea `public/images/gallery/` y carga todas las imágenes
- **Lightbox fullscreen**: Modal oscuro (`bg-black/90 backdrop-blur-sm`) con imagen centrada
- **Navegación por teclado**: Flechas izquierda/derecha para cambiar, ESC para cerrar
- **Grid responsive**: 1 columna en móvil, 2 en tablet, 3 en desktop
- **Hover premium**: Escala 105% + overlay oscuro con icono de lupa
- **Optimización WebP**: Las imágenes se convierten automáticamente con Sharp (calidad 85)

### 6. Testimonios sin saltos visuales

El carrusel de testimonios usa:

- **Altura fija** (`h-[320px] md:h-[280px]`) para evitar que el layout salte
- **Posicionamiento absoluto** de los testimonios (en lugar de `display: none/block`)
- **Indicadores fuera del contenedor** de altura variable
- **Fondo de instrumentos** de peluquería con overlay `bg-black/75` para legibilidad

### 7. Footer con mapa

El footer incluye:

- **3 columnas**: Logo + enlaces | Contacto real | Mapa Google Maps embebido
- **Datos reales**: Calle Alejandro Sánchez, 16, 28019 Madrid | 919 124 423
- **Horario**: Lunes - Sábado 10:00 - 20:00

### 8. Formulario de reserva

El formulario (`BookingForm.tsx`) usa `data-service` en los botones de selección de servicio para facilitar una futura integración con APIs de reservas. Los datos se envían actualmente a un console.log como placeholder.

### 9. Variables de entorno

No se requieren variables de entorno para el funcionamiento básico. Si se integra una API de reservas en el futuro, se recomienda usar:

```env
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
NEXT_PUBLIC_WHATSAPP_NUMBER=34600000000
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios propuestos.

## 📄 Licencia

MIT © 2026 Locky Barber
