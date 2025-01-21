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

const Layout = () => {
  const location = useLocation();
  const receivedData = location.state; // Access the passed data

  console.log(receivedData);
  const raw =
    receivedData?.outputState.data.outputs[0].outputs[0].results.message.data
      .text || "";

  console.log("receivedData", receivedData);

  console.log("data", raw);

  const [passage, setPassage] = useState("");
  const [wordCloudImage, setWordCloudImage] = useState("");
  const data = JSON.parse(raw);
  console.log("data", data);

  useEffect(() => {
    setPassage(data?.wordcloud || "");
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

  useEffect(() => {
    generateWordCloud();
  }, [passage]);

  return (
    <>
      <div>
        <Painpoints data={data} />
        <SentimentDonutChart data={data} />
        <Engagement data={data} />
        <Competitors data={data} />
        <Trends data={data} />
        <Insights data={data} wordCloudImage={wordCloudImage} />
        <Reports data={data} />
      </div>
    </>
  );
};

export default Layout;
