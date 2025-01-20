import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Utility function to clean text safely
const cleanText = (text) => {
  if (typeof text !== "string") return ""; // Ensure text is a string
  return text
    .replace(/[#*]/g, "") // Remove # and *
    .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
    .trim(); // Remove leading/trailing whitespace
};

const LoadingSpinner = ({
  size = "w-10 h-10",
  color = "text-blue-500",
  message = "Loading...",
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchQuery, platform } = location.state || {}; // Safely access state

  const [dataState, setDataState] = useState(null);
  const [outputState, setOutputState] = useState({
    searchQuery: searchQuery,
    data: "",
  });
  const [isFirstFetchLoading, setIsFirstFetchLoading] = useState(false);
  const [isSecondFetchLoading, setIsSecondFetchLoading] = useState(false);
  const [errorFirstFetch, setErrorFirstFetch] = useState(null);
  const [errorSecondFetch, setErrorSecondFetch] = useState(null);

  // First fetch: Fetch platform data
  useEffect(() => {
    if (!platform || !searchQuery) return;

    const controller = new AbortController();

    const fetchPlatformData = async () => {
      try {
        setIsFirstFetchLoading(true);
        setErrorFirstFetch(null);
        let res;

        if (platform === "reddit") {
          res = await fetch("http://localhost:5000/reddit-analysis", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ niche: searchQuery }),
            signal: controller.signal,
          });
        } else if (platform === "quora") {
          res = await fetch("http://localhost:5000/quora-scrape", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: searchQuery }),
            signal: controller.signal,
          });
        }

        if (res.ok) {
          const data = await res.json();

          // Clean the fetched data if it is valid
          const cleanedData = {
            ...data,
            data: cleanText(data?.data), // Ensure data.data exists before cleaning
          };

          setDataState(cleanedData);
        } else {
          throw new Error("Failed to fetch platform data");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setErrorFirstFetch(err.message);
        }
      } finally {
        setIsFirstFetchLoading(false);
      }
    };

    fetchPlatformData();

    return () => {
      controller.abort();
    };
  }, [platform, searchQuery]);

  // Second fetch: Process dataState
  useEffect(() => {
    if (!dataState) return;

    const controller = new AbortController();

    const fetchData = async () => {
      const Token =
        "AstraCS:EZfUbjcgReZiJoOyqsQDFtzs:fd4e4eb15b7447d62a1d75684d4e50b9119e724836002809d18ac3ff3803d931";
      const API_URL = "http://localhost:5000/proxy";

      try {
        setIsSecondFetchLoading(true);
        setErrorSecondFetch(null);

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify({
            input_value: JSON.stringify(dataState),
            output_type: "chat",
            input_type: "chat",
            tweaks: {
              "ChatInput-LEX18": {},
              "GroqModel-xaixW": {},
              "Prompt-qYlpm": {},
              "TextInput-C5ytY": {},
              "Prompt-BWqa3": {},
              "GroqModel-o8DiH": {},
              "ChatOutput-2c7SG": {},
              "TextInput-UYQof": {},
              "TextInput-P0y8s": {},
              "JSONCleaner-qibVv": {
                json_str: "",
                normalize_unicode: true,
                remove_control_chars: true,
                validate_json: false,
              },
              "TextOutput-eU62H": {},
              "ChatOutput-Oxybi": {},
            },
          }),
          signal: controller.signal,
        });
        console.log("response", response);
        if (response.ok) {
          const result = await response.json();

          // Clean the fetched data if it is valid
          const cleanedResult = {
            ...result,
            data: cleanText(result?.data), // Ensure result.data exists before cleaning
          };

          setOutputState({
            data: cleanedResult,
          });

          console.log("outputState", cleanedResult);
        } else {
          throw new Error(`Request failed: ${response.status}`);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err);
          setErrorSecondFetch(err.message);
        }
      } finally {
        setIsSecondFetchLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [dataState]);

  useEffect(() => {
    if (!isFirstFetchLoading && !isSecondFetchLoading && outputState.data) {
      navigate("/dash", { state: { outputState } });
    }
  }, [isFirstFetchLoading, isSecondFetchLoading, outputState, navigate]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 h-full">
      {(isFirstFetchLoading || isSecondFetchLoading) && (
        <>
          <div
            className={`animate-spin rounded-full border-t-4 border-l-4 border-gray-200 ${color} ${size}`}
          ></div>
          <p>Loading...{message}</p>
        </>
      )}

      {errorFirstFetch && (
        <p className="text-red-500">Error: {errorFirstFetch}</p>
      )}
      {errorSecondFetch && (
        <p className="text-red-500">Error: {errorSecondFetch}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;