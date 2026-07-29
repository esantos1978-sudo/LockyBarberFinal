/**
 * Script de optimización de imágenes para la galería
 *
 * Convierte todas las imágenes de public/images/gallery/ a WebP
 * y genera un archivo gallery-images.json con las rutas optimizadas.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.resolve(
  __dirname,
  "..",
  "public",
  "images",
  "gallery",
);
const WEBP_DIR = path.join(GALLERY_DIR, "webp");
const OUTPUT_JSON = path.join(GALLERY_DIR, "gallery-images.json");

// Extensiones de imagen soportadas
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

async function optimizeImages() {
  console.log("🔍 Escaneando imágenes en:", GALLERY_DIR);

  // Asegurar que el directorio webp existe
  if (!fs.existsSync(WEBP_DIR)) {
    fs.mkdirSync(WEBP_DIR, { recursive: true });
  }

  // Leer archivos del directorio
  let files;
  try {
    files = fs.readdirSync(GALLERY_DIR);
  } catch (err) {
    console.error("❌ Error al leer el directorio:", err.message);
    return [];
  }

  // Filtrar solo imágenes (excluyendo subdirectorios y el JSON)
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(GALLERY_DIR, file);
    return SUPPORTED_EXTENSIONS.includes(ext) && fs.statSync(fullPath).isFile();
  });

  if (imageFiles.length === 0) {
    console.log("⚠️  No se encontraron imágenes en el directorio.");
    return [];
  }

  console.log(`📸 Encontradas ${imageFiles.length} imágenes para optimizar.`);

  // Intentar importar sharp
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch (err) {
    console.warn(
      "⚠️  Sharp no está disponible. Usando imágenes originales como fallback.",
    );
    // Generar JSON con rutas originales
    const originalImages = imageFiles.map((file) => `/images/gallery/${file}`);
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(originalImages, null, 2));
    console.log(
      `✅ gallery-images.json generado con ${originalImages.length} imágenes (sin optimizar).`,
    );
    return originalImages;
  }

  const optimizedImages = [];

  for (const file of imageFiles) {
    const inputPath = path.join(GALLERY_DIR, file);
    const webpFilename = path.parse(file).name + ".webp";
    const outputPath = path.join(WEBP_DIR, webpFilename);

    try {
      await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);

      optimizedImages.push(`/images/gallery/webp/${webpFilename}`);
      console.log(`  ✅ ${file} → ${webpFilename} (WebP, calidad 85)`);
    } catch (err) {
      console.warn(
        `  ⚠️  Error al optimizar ${file}: ${err.message}. Usando original.`,
      );
      optimizedImages.push(`/images/gallery/${file}`);
    }
  }

  // Guardar el JSON con las rutas
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(optimizedImages, null, 2));
  console.log(
    `\n✅ gallery-images.json generado con ${optimizedImages.length} rutas.`,
  );

  return optimizedImages;
}

// Ejecutar
optimizeImages()
  .then((images) => {
    if (images.length > 0) {
      console.log("🎉 Optimización completada exitosamente.");
    } else {
      console.log(
        '📭 No hay imágenes para mostrar. La galería mostrará "Próximamente".',
      );
    }
  })
  .catch((err) => {
    console.error("❌ Error durante la optimización:", err);
    process.exit(1);
  });
