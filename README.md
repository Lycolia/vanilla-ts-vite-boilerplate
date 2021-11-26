# {projectName}

- {description}

## Required

- Node.js 16+

## How to using

- Lunch commands
  - `npm start`
    - run vite
  - `npm serve`
    - run vite serve
  - `npm run build`
    - run vite build
      - this only development, not production
  - `npm run type-check`
    - run type-check
  - `npm run test`
    - launches test runner by watch mode
    - transpiler by SWC
      - **not esbuild**
  - `npm run coverage`
    - ~~get coverage report~~

## Directory and files

- `./dist/`
  - Output destination for build
- `./src/`
  - TypeScript source codes
  - CSS
- `./public/assets/`
  - Asset files
  - Import not required in `.ts`
    - This file and file name is copied as it is at build time
- `./index.html`
  - Main HTML
