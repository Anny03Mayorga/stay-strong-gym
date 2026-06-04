import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "ejercicios");

const files = fs
  .readdirSync(inputDir)
  .filter((file) => file.toLowerCase().endsWith(".png"));

for (const file of files) {
  const inputPath = path.join(inputDir, file);

  const outputPath = path.join(
    inputDir,
    file.replace(".png", ".webp")
  );

  await sharp(inputPath)
    .resize({
      width: 800,
      withoutEnlargement: true,
    })
    .webp({
      quality: 70,
    })
    .toFile(outputPath);

  console.log(`✔ ${file}`);
}

console.log("Conversión finalizada");