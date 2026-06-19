import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';

const photosFile = readFileSync('src/data/photos.js', 'utf8');
const entries = [...photosFile.matchAll(/id:\s*(\d+).*?src:\s*'([^']+)'.*?category:\s*'([^']+)'/gs)];

async function scoreImage(webPath) {
  const filePath = join('public', webPath);
  try {
    const img = sharp(filePath);
    const meta = await img.metadata();
    const { channels } = await img
      .resize(400, 400, { fit: 'inside' })
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixels = channels;
    let laplacian = 0;
    const w = meta.width > meta.height ? 400 : Math.round(400 * (meta.width / meta.height));
    const h = meta.height >= meta.width ? 400 : Math.round(400 * (meta.height / meta.width));

    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const i = y * w + x;
        const val = Math.abs(
          4 * pixels[i] -
          pixels[i - 1] - pixels[i + 1] - pixels[i - w] - pixels[i + w]
        );
        laplacian += val;
      }
    }

    const sharpness = laplacian / (w * h);
    const megapixels = ((meta.width || 0) * (meta.height || 0)) / 1e6;
    const score = sharpness * 0.6 + Math.min(megapixels, 8) * 8 + Math.min(meta.width || 0, 1600) / 160;

    return { sharpness, megapixels, width: meta.width, score };
  } catch {
    return { sharpness: 0, megapixels: 0, width: 0, score: 0 };
  }
}

const byCategory = {};
for (const [, id, src, category] of entries) {
  const stats = await scoreImage(src);
  if (!byCategory[category]) byCategory[category] = [];
  byCategory[category].push({ id: Number(id), src, ...stats });
}

for (const [cat, items] of Object.entries(byCategory)) {
  items.sort((a, b) => b.score - a.score);
  const keep = Math.max(2, Math.ceil(items.length * 0.18));
  console.log(`\n${cat} (${items.length} total, keep ${keep}):`);
  items.forEach((p, i) => {
    console.log(`  ${i < keep ? '✓' : ' '} id ${p.id} score=${p.score.toFixed(1)} sharp=${p.sharpness.toFixed(2)} ${p.src}`);
  });
}
