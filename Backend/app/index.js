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

app.post('/proxy', async (req, res) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid authorization header' });
    }

    try {
        const response = await fetch('https://api.langflow.astra.datastax.com/lf/154dca2e-d514-4a19-91fc-f4d198ebd1d9/api/v1/run/cbafec6b-51a8-414e-9adf-5b01f6442ce4?stream=false', {
            method: 'POST',
            headers: {
                'Authorization': authHeader || "Bearer AstraCS:PTHYKJbrTJHxWPoISNNOrzoR:c2331dc003818b31bc690eaf74641b0e1c43b5c201a1b4a36d066c239d48975f",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });
        
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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

