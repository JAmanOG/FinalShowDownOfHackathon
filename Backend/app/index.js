const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');
const { getFitnessVideosSortedByViews } = require('./ytapi');
const analyzeReddit = require('./hungface');
const { scrapeQuora } = require('./qoura');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Ad Analysis API!');
});

app.post('/fitness-videos', async (req, res) => {
    const { data } = req.body;
    const results = await getFitnessVideosSortedByViews(data);
    res.json(results);
});

app.post('/reddit-analysis', async (req, res) => {
    const { niche, competitor } = req.body;
    const results = await analyzeReddit(niche, competitor);
    console.log(results);
    res.json(results);
});

app.post('/quora-scrape', async (req, res) => {
    const { data } = req.body;
    const results = await scrapeQuora(data);
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

