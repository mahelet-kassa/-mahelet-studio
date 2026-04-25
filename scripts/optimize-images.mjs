import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join } from 'path';

const SRC = 'public/images';
const TMP = 'public/images-optimized';
const MAX_WIDTH = 1600;
const QUALITY = 80;

await mkdir(TMP, { recursive: true });

const files = (await readdir(SRC)).filter(f => f.endsWith('.jpg') || f.endsWith('.JPG'));

console.log(`Optimizing ${files.length} images to ${TMP}/...`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const srcPath = join(SRC, file);
  const outPath = join(TMP, file);
  const before = (await stat(srcPath)).size;
  totalBefore += before;

  await sharp(srcPath)
    .resize(MAX_WIDTH, null, { withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(outPath);

  const after = (await stat(outPath)).size;
  totalAfter += after;

  const saved = ((1 - after / before) * 100).toFixed(0);
  console.log(`  ${file}: ${(before/1024/1024).toFixed(1)}MB -> ${(after/1024).toFixed(0)}KB (${saved}% smaller)`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB -> ${(totalAfter/1024/1024).toFixed(1)}MB`);
console.log(`\nOptimized files are in ${TMP}/`);
console.log(`Run: rm -rf public/images && mv public/images-optimized public/images`);
