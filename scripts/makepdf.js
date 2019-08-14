const puppeteer = require("puppeteer");
const fs = require("fs");

// A Post Route to Open the Headless Browser

async function generatePdf() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  // Open a new page with the headless browser
  const page = await browser.newPage();

  // Route the headless browser to the webpage for printing
  await page.goto("http://localhost:3000/?pdf"); // add your url

  // Print the page as pdf
  const buffer = await page.pdf({
    printBackground: true,
    format: "Letter",
    PreferCSSPageSize: false,
    margin: {
      top: "0.8cm",
      bottom: "0.6cm",
      left: "0.4cm",
      right: "0.4cm"
    }
  });

  await fs.writeFile("./docs/atif-mohammed-cv.pdf", buffer, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // Close the headless browser
  browser.close();
}

generatePdf();
