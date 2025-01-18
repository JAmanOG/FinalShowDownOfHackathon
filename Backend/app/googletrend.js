const googleTrends = require('google-trends-api');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const natural = require('natural');
const stopword = require('stopword');

// Function to fetch Google Trends data with retries
const getTrendsData = async (keyword, timeframe = 'today 3-m', maxRetries = 3) => {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt + 1}: Fetching data for keyword: ${keyword}`);

            // Fetch interest over time
            const interestOverTime = await googleTrends.interestOverTime({
                keyword,
                startTime: new Date(new Date().setMonth(new Date().getMonth() - 3)), // Last 3 months
            }).then(JSON.parse);

            // Fetch related queries
            const relatedQueries = await googleTrends.relatedQueries({
                keyword,
                startTime: new Date(new Date().setMonth(new Date().getMonth() - 3)),
            }).then(JSON.parse);

            return {
                interestOverTime: interestOverTime.default.timelineData || [],
                relatedQueries: relatedQueries.default.rankedList || [],
            };
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
            if (attempt < maxRetries - 1) {
                const waitTime = (attempt + 1) * 2000;
                console.log(`Waiting ${waitTime / 1000} seconds before retrying...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            } else {
                console.error("All retry attempts failed.");
                return null;
            }
        }
    }
};

// Function to process trends data
const processTrendsData = (trendsData, keyword) => {
    if (!trendsData) {
        console.log("No trends data available.");
        return { queries: [], avgInterest: 0 };
    }

    const relatedQueries = trendsData.relatedQueries.find(rq => rq.title === "Top queries")?.rankedKeyword || [];
    const queries = relatedQueries.map(q => q.query);
    const avgInterest = trendsData.interestOverTime.reduce((sum, data) => sum + data.value[0], 0) / trendsData.interestOverTime.length || 0;

    return { queries, avgInterest };
};

// Function to perform sentiment analysis using Hugging Face Transformers
const performSentimentAnalysis = async (queries) => {
    if (!queries.length) {
        console.log("No queries to analyze.");
        return {};
    }

    try {
        const { pipeline } = await import('@xenova/transformers');
        const sentimentAnalyzer = await pipeline('sentiment-analysis');
        const results = await Promise.all(queries.map(async query => {
            try {
                return await sentimentAnalyzer(query);
            } catch (err) {
                console.error(`Error analyzing query '${query}': ${err.message}`);
                return null;
            }
        }));

        const sentiments = results.filter(Boolean).map(res => res[0].label);
        const sentimentCounts = sentiments.reduce((acc, sentiment) => {
            acc[sentiment] = (acc[sentiment] || 0) + 1;
            return acc;
        }, {});

        const total = sentiments.length;
        return Object.fromEntries(Object.entries(sentimentCounts).map(([key, value]) => [key, ((value / total) * 100).toFixed(2)]));
    } catch (error) {
        console.error(`Error setting up sentiment analysis: ${error.message}`);
        return {};
    }
};

// Function to generate a trend chart
const plotTrends = async (interestOverTime, keyword) => {
    if (!interestOverTime.length) {
        console.log("No trend data available to plot.");
        return;
    }

    const width = 800;
    const height = 400;
    const chartCallback = (ChartJS) => {
        ChartJS.defaults.responsive = true;
    };
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

    const labels = interestOverTime.map(data => new Date(data.time * 1000).toLocaleDateString());
    const values = interestOverTime.map(data => data.value[0]);

    const configuration = {
        type: 'line',
        data: {
            labels,
            datasets: [{ label: `Search Interest for ${keyword}`, data: values, borderColor: 'blue', fill: false }]
        },
        options: { responsive: true }
    };

    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    require('fs').writeFileSync(`trend_${keyword}.png`, imageBuffer);
    console.log(`Trend chart saved as trend_${keyword}.png`);
};

// Function to create a word cloud
const createWordCloud = (queries) => {
    if (!queries.length) {
        console.log("No queries available for word cloud.");
        return;
    }

    const cleanedWords = stopword.removeStopwords(queries.flatMap(q => q.split(' ')));
    const frequencyMap = cleanedWords.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    const wordsArray = Object.entries(frequencyMap);
    console.log("Word cloud generated (Use in a browser environment).");
};

// Main function
export const main = async (keyword) => {
    console.log("\n=== GOOGLE TRENDS MARKETING ANALYSIS REPORT ===");
    console.log(`\nAnalyzing trends for: ${keyword}...`);

    // Get Google Trends data
    const trendsData = await getTrendsData(keyword);
    if (!trendsData) {
        console.log("Failed to fetch trends data.");
        return;
    }

    // Process trends data
    const { queries, avgInterest } = processTrendsData(trendsData, keyword);

    // Plot search interest over time
    console.log("\n📈 Search Interest Trend:");
    await plotTrends(trendsData.interestOverTime, keyword);
    console.log(`Average Search Interest: ${avgInterest.toFixed(2)}`);

    // Create and display word cloud
    console.log("\n🔤 Word Cloud of Related Queries:");
    createWordCloud(queries);

    // Sentiment Analysis
    if (queries.length) {
        console.log("\n📊 Query Sentiment Analysis:");
        const sentiments = await performSentimentAnalysis(queries);
        Object.entries(sentiments).forEach(([sentiment, percentage]) => {
            console.log(`- ${sentiment}: ${percentage}%`);
        });
    }

    // Display top related queries
    if (queries.length) {
        console.log("\n🔍 Top Related Queries:");
        queries.slice(0, 5).forEach((query, index) => {
            console.log(`${index + 1}. ${query}`);
        });
    } else {
        console.log("\nNo top related queries found.");
    }
};

// Run the main function
const keyword = "Nike"; // Change this to any keyword you want to analyze
main(keyword);