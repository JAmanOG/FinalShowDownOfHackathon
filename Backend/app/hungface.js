const { JSDOM } = require("jsdom");
const snoowrap = require("snoowrap");

// Create a simulated browser environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;

// Configure Reddit API
const reddit = new snoowrap({
  clientId: "ctlENZKCmOGuqFh9uDpfaQ",
  clientSecret: "g_h9Yb4BzBk74QAxELBLP1Jo7Pj1Tw",
  userAgent: "AdAnalysisScript by /u/Low-Maintenance-5330",
  username: "chintuchaman",
  password: "Sreedev#1",
});

// Function to scrape Reddit data
async function scrapeReddit(niche, subreddit = "all", limit = 20) {
  try {
    const subredditObj = await reddit.getSubreddit(subreddit);
    const searchResults = await subredditObj.search({ query: niche, limit });

    return searchResults.map((post) => `${post.title} ${post.selftext}`);
  } catch (error) {
    console.error("Error scraping Reddit:", error);
    return [];
  }
}

// Main Function
async function main(niche) {
  console.log(`\nScraping Reddit for niche: ${niche}...`);

  // Scrape Reddit
  const posts = await scrapeReddit(niche);
  console.log(`Scraped ${posts.length} posts.`);
  posts.forEach((post, index) => {
    console.log(`Post ${index + 1}: ${post}`);
  });

  return posts;
}

module.exports = main;