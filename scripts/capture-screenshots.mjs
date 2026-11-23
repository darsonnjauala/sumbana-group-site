import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.resolve('screenshots');

// Rotas canónicas a capturar
const ROUTES = [
  { name: '01-home', path: '/' },
  { name: '02-servicos', path: '/servicos' },
  { name: '03-sobre', path: '/sobre' },
  { name: '04-contactos', path: '/contactos' }
];

const VIEWPORTS = [
  { type: 'desktop', width: 1440, height: 900 },
  { type: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true }
];

async function run() {
  console.log(`[B-WOS] Iniciando captura de screenshots em: ${BASE_URL}...`);

  fs.mkdirSync(path.join(OUTPUT_DIR, 'desktop'), { recursive: true });
  fs.mkdirSync(path.join(OUTPUT_DIR, 'mobile'), { recursive: true });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.error('[ERRO] Nao foi possivel iniciar o Playwright:', err.message);
    process.exit(1);
  }

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile || false,
      hasTouch: vp.hasTouch || false,
      deviceScaleFactor: 2 // Captura Retina 2x
    });

    const page = await context.newPage();

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route.path}`;
      try {
        const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        if (response && response.status() === 404 && route.path !== '/') {
          // Rota inexistente opcional, ignora em silencio
          continue;
        }
        await page.waitForTimeout(1000);

        const filename = `${route.name}-${vp.width}px.png`;
        const filePath = path.join(OUTPUT_DIR, vp.type, filename);

        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`[OK] Capturado: ${vp.type}/${filename}`);
      } catch (err) {
        if (route.path === '/') {
          console.error(`[AVISO] Falha ao capturar rota ${route.path} em ${vp.type}:`, err.message);
        }
      }
    }
    await context.close();
  }

  await browser.close();
  console.log(`\n[B-WOS] Captura concluida! Screenshots guardados em: ${OUTPUT_DIR}`);
}

run();
