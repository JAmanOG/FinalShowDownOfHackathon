const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');
const { getFitnessVideosSortedByViews } = require('./ytapi');
const analyzeReddit = require('./hungface');
const { scrapeQuora } = require('./qoura');
require('dotenv').config();
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;
const AUTH_HEADER = process.env.AUTH_HEADER;
const LANGFLOW_URL = process.env.LANGFLOW_URL;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Ad Analysis API!');
});


app.post('/proxy', async (req, res) => {
    const authHeader = req.headers.authorization;
    console.log('req.body',JSON.stringify(req.body))
    if (!authHeader || !authHeader.startsWith('Bearer AstraCS:EZfUbjcgReZiJoOyqsQDFtzs:fd4e4eb15b7447d62a1d75684d4e50b9119e724836002809d18ac3ff3803d931')) {
        return res.status(401).json({ error: 'Invalid authorization header' });
    }

    console.log('Proxying request to LangFlow API:', req.body);

    try {
        const response = await fetch('https://api.langflow.astra.datastax.com/lf/154dca2e-d514-4a19-91fc-f4d198ebd1d9/api/v1/run/2d77a7bf-59cb-4cc3-b810-e4d1ef90d2ef?stream=false', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer AstraCS:EZfUbjcgReZiJoOyqsQDFtzs:fd4e4eb15b7447d62a1d75684d4e50b9119e724836002809d18ac3ff3803d931",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });
        
        const data = await response.json();
        console.log(data);
        res.status(response.status).json(data);
    } catch (error) {
        console.log ('Error in proxy', error);
        res.status(500).json({ error: error.message });
    }
});


app.post('/fitness-videos', async (req, res) => {
    const { data } = req.body;
    const results = await getFitnessVideosSortedByViews(data);
    res.json(results);
});

app.post('/reddit-analysis', async (req, res) => {
    const { niche } = req.body;
    console.log("getting the niche ", niche);
    const results = await analyzeReddit(niche);
    console.log(results);
    res.json(results);
});

app.post('/quora-scrape', async (req, res) => {
    const { data } = req.body;
    console.log("getting the data ", data);
    const results = await scrapeQuora(data);
    res.json(results);
});

app.post('/generate-word-cloud', async (req, res) => {
    try {
        const { text } = req.body;

        // QuickChart Word Cloud API endpoint
        const apiUrl = 'https://quickchart.io/wordcloud';

        // Set options for the request
        const options = {
            method: 'POST',
            url: apiUrl,
            data: {
                text: text,
                format: 'png', // Set the format to PNG
                width: 800,    // Set the width of the image
                height: 600,   // Set the height of the image
                fontFamily: 'Arial',  // Set the font family
                fontWeight: 'normal',  // Set the font weight
                fontScale: 20,         // Set the font scale
                scale: 'linear',       // Set the scale
                padding: 2             // Set the padding
            },
            // Set the response type to 
            // arraybuffer to handle image data
            responseType: 'arraybuffer'
        };

        // Make a POST request
        // to QuickChart Word Cloud API
        const response = await axios(options);

        // Send the image data back to the frontend
        res.send(response.data);
    } catch (error) {
        console.error('Error generating word cloud:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

