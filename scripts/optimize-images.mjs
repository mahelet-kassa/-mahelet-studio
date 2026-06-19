import sharp from 'sharp';
import { readdir, stat, rename, unlink, mkdir } from 'fs/promises';
import { join, relative } from 'path';

const ROOT = 'public/images';
const FOLDERS = ['2025', '2026 Graduation', 'Portraits', 'Couples'];
const MAX_WIDTH = 1600;
const QUALITY = 80;

async function collectImages(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'images-optimized') {
      await collectImages(fullPath, files);
    } else if (entry.isFile() && /\.jpe?g$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const images = [];
for (const folder of FOLDERS) {
  try {
    await collectImages(join(ROOT, folder), images);
  } catch {
    // folder may not exist yet
  }
}

if (images.length === 0) {
  console.log('No images found in public/images/{2025,2026,Portraits,Couples}');
  process.exit(0);
}

console.log(`Optimizing ${images.length} images...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const srcPath of images) {
  const tmpPath = srcPath + '.tmp';
  const before = (await stat(srcPath)).size;
  totalBefore += before;

  await sharp(srcPath)
    .rotate()
    .resize(MAX_WIDTH, null, { withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmpPath);

  await unlink(srcPath);
  await rename(tmpPath, srcPath);

  const after = (await stat(srcPath)).size;
  totalAfter += after;

  const saved = ((1 - after / before) * 100).toFixed(0);
  const label = relative(ROOT, srcPath);
  console.log(`  ${label}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`);
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
