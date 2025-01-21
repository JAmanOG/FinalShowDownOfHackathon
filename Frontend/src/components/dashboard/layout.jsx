import React, { useEffect, useState } from "react";
import Competitors from "./competitors";
import Insights from "./insights";
import Painpoints from "./painpoints";
import SentimentDonutChart from "./SentimentDonutChart";
import Engagement from "./engagement";
import Reports from "./reports";
import Trends from "./Trends.jsx";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CustomerFeedback from "./effectivehook.jsx";
const Layout = () => {
  const location = useLocation();
  const receivedData = location.state; // Access the passed data

  console.log(receivedData);
  
  // Accessing raw data with optional chaining
  const raw =
    receivedData?.outputState?.data?.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text || "";

  console.log("receivedData", receivedData);
  console.log("data", raw);
  const [loading, setLoading] = useState(false);

  const [passage, setPassage] = useState("");
  const [ytvideo, setYtvideo] = useState([]);
  const [wordCloudImage, setWordCloudImage] = useState("");

  // Parsing the raw data (JSON string)
  const data = raw ? JSON.parse(raw) : {};
  console.log("data", data);

  useEffect(() => {
    if (data?.wordcloud) {
      setPassage(data.wordcloud);
    }
  }, [data]);

  const generateWordCloud = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/generate-word-cloud",
        { text: passage },
        {
          responseType: "arraybuffer",
        }
      );
      const arrayBufferView = new Uint8Array(response.data);
      const blob = new Blob([arrayBufferView], { type: "image/png" });
      const reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        setWordCloudImage(base64data);
      };
    } catch (error) {
      console.error("Error generating word cloud:", error);
    }
  };

  const ytvideos = async () => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:5000/fitness-videos", {
        data: JSON.stringify(data.competitorlist),
      });
      console.log(response);
      const videoData = Array.isArray(response.data) ? response.data : [];
      setYtvideo(videoData);
      } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      setYtvideo([
        {
          title: "Sample Video",
          description: "Temporary placeholder due to API limitations",
          viewCount: "0",
          channelTitle: "Sample Channel",
          thumbnailUrl: "https://via.placeholder.com/480x360",
          videoUrl: "#"
        }
      ]);
    }finally {
      setLoading(false);
    }
  };

  // Trigger word cloud generation when passage changes
  useEffect(() => {
    if (passage) {
      generateWordCloud();
    }
  }, [passage]);

  useEffect(() => {
    ytvideos();
  }, []);

  return (
    <>
      <div>
        <Painpoints data={data} />
        <SentimentDonutChart data={data} />
        <CustomerFeedback data={data} />
        <Engagement data={data} />
        <Competitors 
        data={data} 
        ytvideo={Array.isArray(ytvideo) ? ytvideo : []}
      />
        <Trends data={data} />
        <Insights data={data} wordCloudImage={wordCloudImage} />
        <Reports data={data} />
      </div>
    </>
  );
};

export default Layout;
