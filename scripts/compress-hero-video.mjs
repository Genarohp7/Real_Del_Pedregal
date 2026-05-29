import { spawnSync } from 'node:child_process';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

const args = [
  '-y',
  '-i',
  'public/assets/video/lienzo-charro-source.mp4',
  '-ss',
  '24',
  '-an',
  '-vf',
  'scale=1280:-2,fps=24',
  '-c:v',
  'libx264',
  '-preset',
  'slow',
  '-crf',
  '30',
  '-movflags',
  '+faststart',
  'public/assets/video/lienzo-charro-hero.mp4',
];

const result = spawnSync(ffmpeg.path, args, { stdio: 'inherit' });
process.exit(result.status ?? 1);
