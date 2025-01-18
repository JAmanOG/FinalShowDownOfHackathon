// const { JSDOM } = require("jsdom");
// const snoowrap = require("snoowrap");
// const natural = require("natural");
// const Sentiment = require("sentiment");

// // Create a simulated browser environment
// const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
// global.window = dom.window;
// global.document = dom.window.document;

// // Configure Reddit API
// const reddit = new snoowrap({
//   clientId: "ctlENZKCmOGuqFh9uDpfaQ",
//   clientSecret: "g_h9Yb4BzBk74QAxELBLP1Jo7Pj1Tw",
//   userAgent: "AdAnalysisScript by /u/Low-Maintenance-5330",
//   username: "chintuchaman",
//   password: "Sreedev#1",
// });

// // Function to scrape Reddit data
// async function scrapeReddit(competitor, subreddit = "all", limit = 10) {
//   try {
//     const subredditObj = await reddit.getSubreddit(subreddit);
//     const searchResults = await subredditObj.search({ query: competitor, limit });

//     return searchResults.map((post) => `${post.title} ${post.selftext}`);
//   } catch (error) {
//     console.error("Error scraping Reddit:", error);
//     return [];
//   }
// }

// // Preprocess text
// function preprocessText(text) {
//   try {
//     const tokenizer = new natural.WordTokenizer();
//     const stopWords = new Set(natural.stopwords);

//     let tokens = tokenizer.tokenize(text.toLowerCase());
//     tokens = tokens.filter((word) => word.match(/^[a-zA-Z0-9]+$/) && !stopWords.has(word));

//     return tokens;
//   } catch (error) {
//     console.error("Error in preprocessing:", error);
//     return [];
//   }
// }

// // Sentiment Analysis
// function performSentimentAnalysis(posts) {
//   try {
//     const sentiment = new Sentiment();
//     const sentiments = posts.map((post) => sentiment.analyze(post).score);

//     const positive = sentiments.filter((score) => score > 0).length;
//     const negative = sentiments.filter((score) => score < 0).length;
//     const neutral = sentiments.filter((score) => score === 0).length;
//     const total = sentiments.length;

//     return {
//       Positive: ((positive / total) * 100).toFixed(2),
//       Negative: ((negative / total) * 100).toFixed(2),
//       Neutral: ((neutral / total) * 100).toFixed(2),
//     };
//   } catch (error) {
//     console.error("Error in sentiment analysis:", error);
//     return {};
//   }
// }

// // Extract Pain Points (Top Keywords)
// function extractPainPoints(posts) {
//   const allTokens = posts.flatMap(preprocessText);
//   const frequency = allTokens.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.entries(frequency)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 10)
//     .map(([word]) => word);
// }

// // Generate Hooks and CTAs
// function generateRecommendations(painPoints) {
//   const hooks = painPoints.map((p) => `Are you struggling with ${p}? Discover our solutions!`);
//   const ctas = painPoints.map((p) => `Start your journey to overcome ${p} today!`);
//   return { hooks, ctas };
// }

// // Analyze Engagement
// async function analyzeEngagement(competitor) {
//   try {
//     const subreddit = await reddit.getSubreddit("all");
//     const searchResults = await subreddit.search({ query: competitor, limit: 10 });

//     const upvotes = searchResults.map((post) => post.score);
//     const comments = searchResults.map((post) => post.num_comments);

//     const avgUpvotes = upvotes.reduce((a, b) => a + b, 0) / upvotes.length;
//     const avgComments = comments.reduce((a, b) => a + b, 0) / comments.length;
//     const totalEngagements = upvotes.reduce((a, b) => a + b, 0) + comments.reduce((a, b) => a + b, 0);

//     return {
//       average_upvotes: avgUpvotes.toFixed(2),
//       average_comments: avgComments.toFixed(2),
//       total_engagements: totalEngagements,
//     };
//   } catch (error) {
//     console.error("Error in engagement analysis:", error);
//     return {};
//   }
// }

// // Main Function
// async function main(niche, competitor) {
//   console.log("\n=== MARKETING ANALYSIS REPORT ===");
//   console.log(`\nAnalyzing competitor: ${competitor} in niche: ${niche}...`);

//   // Scrape Reddit
//   const posts = await scrapeReddit(competitor);
//   console.log(`Scraped ${posts.length} posts.`);

//   // Sentiment Analysis
//   const sentiments = performSentimentAnalysis(posts);
//   console.log("\n📊 Sentiment Analysis:");
//   for (const [sentiment, percentage] of Object.entries(sentiments)) {
//     console.log(`- ${sentiment}: ${percentage}%`);
//   }

//   // Pain Point Extraction
//   const painPoints = extractPainPoints(posts);
//   console.log("\n🎯 Top Pain Points/Keywords:");
//   painPoints.forEach((point, i) => console.log(`${i + 1}. ${point}`));

//   // Generate Recommendations
//   const { hooks, ctas } = generateRecommendations(painPoints);
//   console.log("\n💡 Recommended Marketing Hooks:");
//   hooks.slice(0, 5).forEach((hook, i) => console.log(`${i + 1}. ${hook}`));

//   console.log("\n🚀 Recommended CTAs:");
//   ctas.slice(0, 5).forEach((cta, i) => console.log(`${i + 1}. ${cta}`));

//   // Analyze Engagement
//   const engagementMetrics = await analyzeEngagement(competitor);
//   if (Object.keys(engagementMetrics).length) {
//     console.log("\n👥 Engagement Metrics:");
//     console.log(`- Average Upvotes: ${engagementMetrics.average_upvotes}`);
//     console.log(`- Average Comments: ${engagementMetrics.average_comments}`);
//     console.log(`- Total Engagements: ${engagementMetrics.total_engagements}`);
//   }
// }

// module.exports = main;
const { JSDOM } = require("jsdom");
const snoowrap = require("snoowrap");
const natural = require("natural");
const Sentiment = require("sentiment");

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
async function scrapeReddit(competitor, subreddit = "all", limit = 10) {
  try {
    const subredditObj = await reddit.getSubreddit(subreddit);
    const searchResults = await subredditObj.search({ query: competitor, limit });

    return searchResults.map((post) => `${post.title} ${post.selftext}`);
  } catch (error) {
    console.error("Error scraping Reddit:", error);
    return [];
  }
}

// Preprocess text
function preprocessText(text) {
  try {
    const tokenizer = new natural.WordTokenizer();
    const stopWords = new Set(natural.stopwords);

    let tokens = tokenizer.tokenize(text.toLowerCase());
    tokens = tokens.filter((word) => word.match(/^[a-zA-Z0-9]+$/) && !stopWords.has(word));

    return tokens;
  } catch (error) {
    console.error("Error in preprocessing:", error);
    return [];
  }
}

// Sentiment Analysis
function performSentimentAnalysis(posts) {
  try {
    const sentiment = new Sentiment();
    const sentiments = posts.map((post) => sentiment.analyze(post).score);

    const positive = sentiments.filter((score) => score > 0).length;
    const negative = sentiments.filter((score) => score < 0).length;
    const neutral = sentiments.filter((score) => score === 0).length;
    const total = sentiments.length;

    return {
      Positive: ((positive / total) * 100).toFixed(2),
      Negative: ((negative / total) * 100).toFixed(2),
      Neutral: ((neutral / total) * 100).toFixed(2),
    };
  } catch (error) {
    console.error("Error in sentiment analysis:", error);
    return {};
  }
}

// Extract Pain Points (Top Keywords)
function extractPainPoints(posts) {
  const allTokens = posts.flatMap(preprocessText);
  const frequency = allTokens.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);
}

// Generate Hooks and CTAs
function generateRecommendations(painPoints) {
  const hooks = painPoints.map((p) => `Are you struggling with ${p}? Discover our solutions!`);
  const ctas = painPoints.map((p) => `Start your journey to overcome ${p} today!`);
  return { hooks, ctas };
}

// Analyze Engagement
async function analyzeEngagement(competitor) {
  try {
    const subreddit = await reddit.getSubreddit("all");
    const searchResults = await subreddit.search({ query: competitor, limit: 10 });

    const upvotes = searchResults.map((post) => post.score);
    const comments = searchResults.map((post) => post.num_comments);

    const avgUpvotes = upvotes.reduce((a, b) => a + b, 0) / upvotes.length;
    const avgComments = comments.reduce((a, b) => a + b, 0) / comments.length;
    const totalEngagements = upvotes.reduce((a, b) => a + b, 0) + comments.reduce((a, b) => a + b, 0);

    return {
      average_upvotes: avgUpvotes.toFixed(2),
      average_comments: avgComments.toFixed(2),
      total_engagements: totalEngagements,
    };
  } catch (error) {
    console.error("Error in engagement analysis:", error);
    return {};
  }
}

// Main Function
async function main(niche, competitor) {
  const report = {
    niche,
    competitor,
    scrapedPosts: [],
    sentimentAnalysis: {},
    painPoints: [],
    recommendations: {
      hooks: [],
      ctas: []
    },
    engagementMetrics: {}
  };

  console.log("\n=== MARKETING ANALYSIS REPORT ===");
  console.log(`\nAnalyzing competitor: ${competitor} in niche: ${niche}...`);

  // Scrape Reddit
  const posts = await scrapeReddit(competitor);
  report.scrapedPosts = posts;
  console.log(`Scraped ${posts.length} posts.`);

  // Sentiment Analysis
  const sentiments = performSentimentAnalysis(posts);
  report.sentimentAnalysis = sentiments;
  console.log("\n📊 Sentiment Analysis:");
  for (const [sentiment, percentage] of Object.entries(sentiments)) {
    console.log(`- ${sentiment}: ${percentage}%`);
  }

  // Pain Point Extraction
  const painPoints = extractPainPoints(posts);
  report.painPoints = painPoints;
  console.log("\n🎯 Top Pain Points/Keywords:");
  painPoints.forEach((point, i) => console.log(`${i + 1}. ${point}`));

  // Generate Recommendations
  const { hooks, ctas } = generateRecommendations(painPoints);
  report.recommendations.hooks = hooks;
  report.recommendations.ctas = ctas;
  console.log("\n💡 Recommended Marketing Hooks:");
  hooks.slice(0, 5).forEach((hook, i) => console.log(`${i + 1}. ${hook}`));

  console.log("\n🚀 Recommended CTAs:");
  ctas.slice(0, 5).forEach((cta, i) => console.log(`${i + 1}. ${cta}`));

  // Analyze Engagement
  const engagementMetrics = await analyzeEngagement(competitor);
  report.engagementMetrics = engagementMetrics;
  if (Object.keys(engagementMetrics).length) {
    console.log("\n👥 Engagement Metrics:");
    console.log(`- Average Upvotes: ${engagementMetrics.average_upvotes}`);
    console.log(`- Average Comments: ${engagementMetrics.average_comments}`);
    console.log(`- Total Engagements: ${engagementMetrics.total_engagements}`);
  }

  return report;
}

module.exports = main;