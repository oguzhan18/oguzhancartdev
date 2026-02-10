import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const source = join(publicDir, 'logo-source.png');

if (!existsSync(source)) {
  console.error('logo-source.png bulunamadı. Önce public/logo-source.png ekleyin.');
  process.exit(1);
}

const sizes = [
  { name: 'favicon-16x16.png', w: 16, h: 16 },
  { name: 'favicon-32x32.png', w: 32, h: 32 },
  { name: 'apple-touch-icon.png', w: 180, h: 180 },
  { name: 'icon-192x192.png', w: 192, h: 192 },
  { name: 'icon-512x512.png', w: 512, h: 512 },
];

const buffer = readFileSync(source);

await Promise.all(
  sizes.map(({ name, w, h }) =>
    sharp(buffer)
      .resize(w, h)
      .png()
      .toFile(join(publicDir, name))
      .then(() => console.log('✓', name))
  )
);

console.log('Icon üretimi tamamlandı.');
