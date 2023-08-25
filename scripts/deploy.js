const { exec } = require('child_process');
const http = require('http');
const puppeteer = require('puppeteer');

// Step 1: Start the server
const server = exec('yarn serve -p 3000 docs/');

// Step 2: Wait for server to be ready
const waitForServer = () => {
  return new Promise((resolve) => {
    const checkServer = () => {
      http.get('http://localhost:3000', (res) => {
        if (res.statusCode === 200) {
          resolve();
        }
      }).on('error', () => {
        console.log('Waiting for server...');
        setTimeout(checkServer, 1000);
      });
    };
    checkServer();
  });
};

// Step 3: Run PDF script
const makePdf = async () => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  await page.goto('http://localhost:3000?pdf', { waitUntil: 'networkidle2' });
  await page.pdf({ path: './docs/atif-mohammed-cv.pdf', format: 'Letter' });
  await browser.close();
};

// Orchestrating the steps
const orchestrate = async () => {
  await waitForServer();
  await makePdf();
  server.kill();
  process.exit();
};

// Run the orchestration
orchestrate().catch(console.error);
