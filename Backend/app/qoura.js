const puppeteer = require('puppeteer');

// const inputdata = "Top challenges in fitness for health and wellness";
const profilePath = "C:/Users/Aman Jaiswal/AppData/Local/Google/Chrome/User Data/Default"; // Replace with your profile path

const scrapeQuora = async (input) => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: profilePath,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto(`https://www.quora.com/search?q=${encodeURIComponent(input)}`, {
    waitUntil: 'networkidle2',
  });

  await page.evaluate(() => {
    const moreButtons = document.querySelectorAll('.qt_read_more');
    moreButtons.forEach(button => button.click());
  });

  await new Promise(resolve => setTimeout(resolve, 4000));

  const answers = await page.evaluate(() => {
    const answerElements = document.querySelectorAll('.q-box.spacing_log_answer_content');
    const answerData = [];

    answerElements.forEach(answerElement => {
      let answerText = answerElement.innerText.trim();
      answerText = answerText.replace(/\n/g, ' ');
      answerData.push(answerText);
    });

    return answerData;
  });

  console.log(answers);
  await browser.close();
  return answers;
};

module.exports = { scrapeQuora };