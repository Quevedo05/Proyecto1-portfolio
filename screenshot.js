const puppeteer = require('puppeteer');

const sites = [
  { url: 'https://calidadcuyo.com/', file: 'assets/calidad-cuyo.png' },
  { url: 'https://grupoinnova.com.ar/', file: 'assets/grupo-innova.png' },
  { url: 'https://choice.com.ar/', file: 'assets/choice.png' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });

  for (const site of sites) {
    console.log(`Capturing: ${site.url}`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 1500));
      await page.screenshot({ path: site.file, type: 'png' });
      console.log(`  ✓ Saved ${site.file}`);
    } catch (err) {
      console.error(`  ✗ Failed ${site.url}:`, err.message);
    }
    await page.close();
  }

  await browser.close();
  console.log('Done.');
})();
