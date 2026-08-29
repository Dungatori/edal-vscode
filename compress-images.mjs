import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import path from "path";

const inputDir = "src/assets";
const outputDir = "src/assets-compressed";

if (!existsSync(outputDir)) mkdirSync(outputDir);

const files = readdirSync(inputDir).filter(f =>
  /\.(jpg|jpeg|png)$/i.test(f)
);

console.log(`Found ${files.length} images to compress...`);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    await sharp(inputPath)
      .resize(1200, 900, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outputPath.replace(/\.(png)$/i, ".jpg"));

    console.log(`✓ ${file}`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log("Done! Check src/assets-compressed/");
