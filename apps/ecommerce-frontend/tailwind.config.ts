import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

/** @type {Config} */
const config: Config = {
  content: [
    // Scan all Angular apps and libraries
    join(process.cwd(), 'apps/**/src/**/!(*.stories|*.spec).{ts,html}'),
    join(process.cwd(), 'libs/**/src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(process.cwd()),
  ],
  theme: {
    fontFamily: {
      sans: 'Inter var, ui-sans-serif, system-ui',
      serif: 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1.3rem',
      xl: '1.55rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [
    typography,
    daisyui, // DaisyUI plugin
  ],
  daisyui: {
    themes: [
      {
        fantasy: {
          'base-100' : '#ffffff',
          primary: '#0000ff',
          'primary-content': 'white',
          secondary: '#F6F6F6',
          neutral: '#E8E8E8',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};

export default config;