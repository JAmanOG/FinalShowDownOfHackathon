import React, { useEffect } from "react";
import Competitors from "./competitors";
import Insights from "./insights";
import Painpoints from "./painpoints";
import SentimentDonutChart from "./SentimentDonutChart";
import Engagement from "./engagement";
import Reports from "./reports";
import { data } from "../../constant";
import { useNavigate } from "react-router-dom";

const Loading = () => {
};


const Layout = () => {
    const [dataState, setDataState] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
  
    const dataValue = React.useMemo(() => {
      const savedData = localStorage.getItem("dataState");
      return savedData ? JSON.parse(savedData) : null;
    }, []);

    
  
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
      
        const fetchData = async () => {
          if (!prompt) return;
      
          setIsLoading(true);
          setError(null);
          const Token = 'AstraCS:PTHYKJbrTJHxWPoISNNOrzoR:c2331dc003818b31bc690eaf74641b0e1c43b5c201a1b4a36d066c239d48975f';
      
          try {
            const response = await fetch('https://hackathonlevelsupermind.azurewebsites.net/proxy', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token||''}`,
              },
              body: JSON.stringify({
                input_value: JSON.stringify(prompt),
                output_type: "chat",
                input_type: "chat",
                tweaks: {
                    "ChatInput-SQD9p": {},
                    "GroqModel-1mxi2": {},
                    "Prompt-cHryr": {},
                    "ChatOutput-Iakbm": {}
                  },
              }),
              signal: controller.signal,
            });
      
            if (!response.ok) {
              throw new Error(`Request failed: ${response.status && response.detail|| response.status}`);
            }
      
            const result = await response.json();
            if (isMounted) {
              setDataState(result);
              setError(null);
      
              // Update localStorage with the fetched data
              localStorage.setItem("dataState", JSON.stringify(result));
            }
          } catch (err) {
            if (err.name === 'AbortError') return;
            if (isMounted) {
              setError(err.message);
              console.error('Fetch error:', err);
            }
          } finally {
            if (isMounted) {
              setIsLoading(false);
            }
          }
        };
      
        fetchData();
      
        return () => {
          isMounted = false;
          controller.abort();
        };
      }, [prompt]);

      if (isLoading) return <Loading />;

      if (error) {
        return (
          <div className="flex flex-col gap-4 justify-center items-center h-screen">
            <h1 className="text-2xl text-red-500">Error: {error}</h1>
            <h2>Check your GPT API key and try again.</h2>
            <button
              onClick={()=>navigate('/api')}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            > 
              Go to API Page
            </button>
            
            <button
              onClick={()=>navigate('/prompt')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              To Prompt Page
            </button>
          </div>
        );
      }
    
    const extractSection = (title, subTitle = null) => {
        const regex = new RegExp(
          `^### \\*\\*${title}\\*\\*\\s*\\n(?:.*\\n)*?(?<content>(?:(?!^###).+\\n?)+)`,
          "gm"
        );
        const match = regex.exec(data);
        let content = match?.groups?.content.trim() || "Section not found";

        if (subTitle) {
            const subRegex = new RegExp(
              `^#### \\*\\*${subTitle}\\*\\*\\s*\\n(?<subContent>(?:(?!^####|^###).+\\n?)+)`,
              "gm"
            );
            const subMatch = subRegex.exec(content);
            content = subMatch?.groups?.subContent.trim() || "Subsection not found";
        }

        return content;
    };

    const competitors = extractSection("Competitor Analysis");
    const sentiment = extractSection("Sentiment Analysis", "Overall Sentiment Distribution");
    const reports = extractSection("Edtech Analytics Reports");
    const insights = extractSection("Visualized Insights");
    const painpoints = extractSection("User Pain Points Analysis");
    const engagement = extractSection("Engagement Analysis");

    return (
        <div>
            {dataState || dataValue ? (
                <>
                    <Competitors competitors={competitors} />
                    <SentimentDonutChart sentiment={sentiment} />
                    <Reports reports={reports} />
                    <Insights insights={insights} />
                    <Painpoints painpoints={painpoints} />
                    <Engagement engagement={engagement} />
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Layout;