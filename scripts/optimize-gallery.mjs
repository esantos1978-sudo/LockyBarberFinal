import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const inputDir = "./public/images/gallery";
const outputDir = "./public/images/gallery/webp";

if (!existsSync(outputDir)) mkdirSync(outputDir);

const files = readdirSync(inputDir).filter(
  (f) => f.startsWith("corte") && /\.(jpg|jpeg|png)$/i.test(f),
);

console.log(`Detectadas ${files.length} fotos`);

for (const file of files) {
  const inputPath = join(inputDir, file);
  const outputPath = join(
    outputDir,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
  );

  await sharp(inputPath)
    .resize(1200, 800, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(outputPath);

  console.log(`✓ ${file} → ${file.replace(/\.(jpg|jpeg|png)$/i, ".webp")}`);
}

console.log("Optimización completada");
