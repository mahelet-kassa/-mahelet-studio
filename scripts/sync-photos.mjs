import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const ROOT = 'public/images';
const PHOTOS_FILE = 'src/data/photos.js';
const DEFAULT_FOLDERS = ['2026 Graduation', 'Portraits', 'Couples'];

const folders = process.argv.length > 2 ? process.argv.slice(2) : DEFAULT_FOLDERS;

const FOLDER_CATEGORY = {
  '2025': 'Graduation',
  '2026 Graduation': 'Graduation',
  'Portraits': 'Portraits',
  'Couples': 'Couples',
};

async function collectImages() {
  const images = [];
  for (const folder of folders) {
    const dir = join(ROOT, folder);
    let files;
    try {
      files = await readdir(dir);
    } catch {
      continue;
    }
    for (const file of files) {
      if (/\.jpe?g$/i.test(file)) {
        images.push({
          folder,
          file,
          webPath: `/images/${folder}/${file}`,
        });
      }
    }
  }
  return images;
}

function parseExisting(content) {
  const paths = new Set();
  const idMatches = [...content.matchAll(/\bid:\s*(\d+)/g)];
  const maxId = idMatches.length ? Math.max(...idMatches.map((m) => Number(m[1]))) : 0;

  for (const match of content.matchAll(/src:\s*'([^']+)'/g)) {
    paths.add(match[1]);
  }

  return { paths, maxId };
}

function titleFromFilename(file) {
  const base = file.replace(/\.[^.]+$/, '');
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildEntry(id, webPath, category, title) {
  const pad = `  `.repeat(1);
  return `${pad}{ id: ${id}, src: '${webPath}', thumb: '${webPath}', title: '${title.replace(/'/g, "\\'")}', category: '${category}', aspect: 'landscape' },`;
}

const content = await readFile(PHOTOS_FILE, 'utf8');
const { paths, maxId } = parseExisting(content);
const onDisk = await collectImages();

const missing = onDisk.filter((img) => !paths.has(img.webPath));

if (missing.length === 0) {
  console.log('All images are already in photos.js. Nothing to add.');
  process.exit(0);
}

let nextId = maxId + 1;
const newLines = missing.map((img) => {
  const category = FOLDER_CATEGORY[img.folder];
  const title = titleFromFilename(img.file);
  const line = buildEntry(nextId, img.webPath, category, title);
  console.log(`  + id ${nextId}: ${img.webPath} (${category})`);
  nextId += 1;
  return line;
});

const insertAt = content.lastIndexOf('];');
if (insertAt === -1) {
  console.error('Could not find photos array in photos.js');
  process.exit(1);
}

const updated =
  content.slice(0, insertAt) +
  newLines.join('\n') +
  '\n' +
  content.slice(insertAt);

await writeFile(PHOTOS_FILE, updated);

console.log(`\nAdded ${missing.length} photo(s) to ${PHOTOS_FILE}`);
console.log('Edit titles in photos.js if you want custom names.');
