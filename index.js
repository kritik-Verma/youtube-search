const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/results?search_query=no+loss+king");
  const result = await page.evaluate(() => {
    const htmlElement = document.getElementsByClassName(
      "yt-simple-endpoint style-scope ytd-video-renderer"
    )[0];
    const arrOfElements = [...htmlElement];
    console.log("songurl");
    // const songurl = arrOfElements[0].href;
    return arrOfElements.href;
  });

  console.log(result);

  await browser.close();
})();
