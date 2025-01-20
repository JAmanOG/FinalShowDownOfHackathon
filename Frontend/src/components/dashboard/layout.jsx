import React, { useEffect, useState } from "react";
import Competitors from "./competitors";
import Insights from "./insights";
import Painpoints from "./painpoints";
import SentimentDonutChart from "./SentimentDonutChart";
import Engagement from "./engagement";
import Reports from "./reports";
import Trends from "./Trends.jsx";
import axios from 'axios';
import { useLocation } from "react-router-dom";


const Layout = () => {
  const location = useLocation();
  const receivedData = location.state; // Access the passed data

  console.log(receivedData)
  const raw = receivedData?.outputState.data.outputs[0].outputs[0].results.message.data.text || "";

  console.log("receivedData",receivedData);

  // const yt_search = receivedData.searchQuery;

  // const data = raw.data;
  console.log("data",raw);

    const [passage, setPassage] = useState('');
    const [wordCloudImage, setWordCloudImage] = useState('');
    console.log("data",raw);
    const data = JSON.parse(raw);
    console.log("data",data);

    useEffect(() => {
        setPassage(data?.wordcloud || "");
    }, [data]);

        const generateWordCloud = async () => {
          try {
            // Send a POST request to the backend
            // server to generate the word cloud
            const response = await axios.post(
      'http://localhost:5000/generate-word-cloud', { text: passage }, {
              // Set response type to 
              // arraybuffer to handle image data
              responseType: 'arraybuffer'
            });
      
            // Convert the array buffer received
            // from the server to a base64-encoded string
            const arrayBufferView = new Uint8Array(response.data);
            const blob = new Blob([arrayBufferView], { type: 'image/png' });
            const reader = new FileReader();
      
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const base64data = reader.result;
              // Set the word cloud image using the base64 string
              setWordCloudImage(base64data);
            };
          } catch (error) {
            console.error('Error generating word cloud:', error);
          }
        };

    useEffect(() => {
        generateWordCloud();
    }, [passage]);
    
    

    return (
        <div>
                <>
                    <Painpoints data={data} />
                    <SentimentDonutChart data={data} />
                    <Engagement data={data} />
                    <Competitors data={data}  />
                    <Trends data={data} />
                    <Insights data={data} wordCloudImage={wordCloudImage} />
                    <Reports data={data} />
                </>
        </div>
    );
};

export default Layout;