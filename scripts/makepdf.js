const puppeteer = require("puppeteer");
const fs = require("fs");

async function generatePdf() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: "new",
  });

  // Open a new page with the headless browser
  const page = await browser.newPage();
  await page.setCacheEnabled(false);

  // Route the headless browser to the webpage for printing
  await page.goto("http://localhost:3000/?pdf"); // add your url

  // Wait for lazy loaded the components to mount
  await page.waitForTimeout(3000);

  // Print the page as pdf
  const buffer = await page.pdf({
    printBackground: true,
    format: "Letter",
    PreferCSSPageSize: false,
    margin: {
      top: "0.15cm",
      bottom: "0.15cm",
    },
  });

  await fs.writeFile("./docs/atif-mohammed-cv.pdf", buffer, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  // Close the headless browser
  browser.close();
}

generatePdf();
