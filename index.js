"use strict";
const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/", async (req, res) => {
  const { selector, url } = req.body;
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector(selector);
  const element = await page.$(selector);
  const result = await element.screenshot({
    type: "png",
    encoding: "binary",
    omitBackground: false,
  });
  await browser.close();

  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
