// Portfolio photos — generated from every image folder under public/images.
// To add new work: drop files in a folder below and list the filenames here.

export const categories = ['All', 'Graduation', 'Portraits', 'Couples'];

// Each folder maps to a display category. The full library lives here.
const collections = [
  {
    folder: '2025',
    category: 'Graduation',
    files: [
      'photo-01.jpg', 'photo-02.jpg', 'photo-03.jpg', 'photo-04.jpg', 'photo-05.jpg',
      'photo-06.jpg', 'photo-07.jpg', 'photo-10.jpg', 'photo-11.jpg', 'photo-12.jpg',
      'photo-13.jpg', 'photo-14.jpg', 'photo-15.jpg', 'photo-16.jpg', 'photo-17.jpg',
      'photo-19.jpg', 'photo-21.jpg', 'photo-22.jpg', 'photo-24.jpg', 'photo-25.jpg',
      'photo-27.jpg', 'photo-28.jpg', 'photo-29.jpg', 'photo-30.jpg', 'photo-31.jpg',
      'photo-32.jpg', 'photo-33.jpg', 'photo-35.jpg', 'photo-36.jpg', 'photo-38.jpg',
    ],
  },
  {
    folder: '2026 Graduation',
    category: 'Graduation',
    files: [
      'photo-39.jpg', 'photo-40.jpg', 'photo-41.jpg', 'photo-42.jpg', 'photo-43.jpg',
      'photo-44.jpg', 'photo-45.jpg', 'photo-46.jpg', 'photo-47.jpg', 'photo-48.jpg',
      'photo-49.jpg', 'photo-50.jpg', 'photo-51.jpg', 'photo-52.jpg', 'photo-53.jpg',
      'photo-54.jpg', 'photo-55.jpg', 'photo-56.jpg',
    ],
  },
  {
    folder: 'Portraits',
    category: 'Portraits',
    files: [
      'photo-57.jpg', 'photo-58.jpg', 'photo-59.jpg', 'photo-60.jpg', 'photo-61.jpg',
      'photo-62.jpg', 'photo-63.jpg', 'photo-64.jpg', 'photo-65.jpg', 'photo-66.jpg',
      'photo-67.jpg', 'photo-68.jpg', 'photo-69.jpg',
    ],
  },
  {
    folder: 'Couples',
    category: 'Couples',
    files: ['photo-71.jpg'],
  },
];

// Optional per-image curation, keyed by web path. Anything not listed gets a
// sensible auto-generated title and a standard grid cell.
const overrides = {
  '/images/2025/photo-01.jpg': { title: 'Cap & Gown', featured: true, layout: 'large' },
  '/images/2025/photo-28.jpg': { title: 'Golden Memories', featured: true },
  '/images/2025/photo-35.jpg': { title: 'Our Story', layout: 'wide' },
  '/images/2026 Graduation/photo-42.jpg': { title: 'Commencement Day', featured: true, layout: 'wide' },
  '/images/2026 Graduation/photo-49.jpg': { title: 'Achievement' },
  '/images/2026 Graduation/photo-50.jpg': { title: 'Celebration' },
  '/images/Portraits/photo-58.jpg': { title: 'Natural Light', featured: true, layout: 'large' },
  '/images/Portraits/photo-63.jpg': { title: 'Quiet Moment' },
  '/images/Couples/photo-71.jpg': { title: 'Together', featured: true },
};

function titleFromFilename(file) {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

let nextId = 0;

export const photos = collections.flatMap(({ folder, category, files }) =>
  files.map((file) => {
    const src = `/images/${folder}/${file}`;
    const custom = overrides[src] || {};
    return {
      id: (nextId += 1),
      src,
      thumb: src,
      folder,
      category,
      aspect: 'landscape',
      title: custom.title || titleFromFilename(file),
      ...(custom.featured ? { featured: true } : {}),
      ...(custom.layout ? { layout: custom.layout } : {}),
    };
  })
);

export const featuredPhotos = photos.filter((p) => p.featured);

export const heroImage = '/images/2025/photo-35.jpg';
