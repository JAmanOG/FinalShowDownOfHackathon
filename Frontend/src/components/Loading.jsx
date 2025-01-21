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
              "ChatOutput-2c7SG": {},
              "TextInput-UYQof": {
                input_value:
                  '\nTask: Convert the provided data into a JavaScript object using the exact same structure as the given example.\n\nKey Requirements:\n\nPreserve Exact Structure: The output must match the structure of the given example exactly, including all keys, nesting, and data types.\nOnly Replace Values: Change only the values inside the object to correspond with the provided data. Do not modify keys, nesting, or the overall structure.\nNo Schema Changes: Ensure that the resulting object strictly adheres to the schema from the example.\nGenerate Valid JavaScript: The result must be a syntactically correct JavaScript object.\n\nImportant Note: Plz Begging you to not to change the schema structure no matter what the data is if the name is matching to that not matter just keep the naming convention as it strictly follow other wise it will break my application i want exact same schema which i provided below\n\n\nSchema:\n{\n  "userPainPointsAnalysis": [\n    {\n      "title": "Mental Health",\n      "issues": [\n        "Anxiety",\n        "Stress",\n        "Obsessive perfectionism"\n      ]\n    },\n    {\n      "title": "Work-Life Balance",\n      "issues": [\n        "Time management issues",\n        "Performance pressure",\n        "Career-life conflict"\n      ]\n    },\n    {\n      "title": "Health Concerns",\n      "issues": [\n        "Chronic diseases",\n        "Lifestyle diseases",\n        "Limited self-care time"\n      ]\n    },\n    {\n      "title": "Emotional Management",\n      "issues": [\n        "Fear of criticism",\n        "Burnout symptoms",\n        "Emotional overwhelm"\n      ]\n    }\n  ],\n  "impactScale": [\n    {\n      "title": "Mental Health Impact",\n      "percentage": 85\n    },\n    {\n      "title": "Work-Life Balance Impact",\n      "percentage": 75\n    },\n    {\n      "title": "Physical Health Impact",\n      "percentage": 70\n    }\n  ],\n  "sentimentAnalysis": {\n    "overallSentiment": {\n      "positive": 60,\n      "negative": 20,\n      "neutral": 20\n    },\n    "emotionalCategories": {\n      "positive": [\n        "Hope",\n        "Inspiration",\n        "Motivation"\n      ],\n      "negative": [\n        "Anxiety",\n        "Stress",\n        "Frustration"\n      ],\n      "neutral": [\n        "Curiosity",\n        "Interest",\n        "Skepticism"\n      ]\n    },\n    "sentimentIntensity": [\n      {\n        "emotion": "Hope",\n        "percentage": 85\n      },\n      {\n        "emotion": "Anxiety",\n        "percentage": 65\n      },\n      {\n        "emotion": "Curiosity",\n        "percentage": 75\n      }\n    ]\n  },\n  "EngagementAnalysis": {\n    "effectiveHooks": [\n      {\n        "quote": "I try to separate from myself and see myself when I suffer mental challenges.",\n        "engagement": "High engagement rate"\n      },\n      {\n        "quote": "The best way to stay healthy is to maintain a balanced lifestyle.",\n        "engagement": "Most shared"\n      }\n    ],\n    "ctaPerformance": [\n      {\n        "cta": "Get out and walk...",\n        "conversion": 78\n      },\n      {\n        "cta": "Schedule routine check-ups...",\n        "conversion": 65\n      },\n      {\n        "cta": "Don\'t spoil your health...",\n        "conversion": 55\n      }\n    ],\n    "contentFormatPerformance": [\n      {\n        "format": "Personal Stories",\n        "engagement": 89,\n        "description": "Highest engagement rate among all content formats"\n      },\n      {\n        "format": "Listicles",\n        "engagement": 75,\n        "description": "Most shared content format across platforms"\n      },\n      {\n        "format": "Infographics",\n        "engagement": 82,\n        "description": "Highest information retention rate"\n      }\n    ]\n  },\n  "CompetitorInsights": {\n    "competitors": [\n      {\n        "title": "Fitness Apps",\n        "marketShare": 35,\n        "growthRate": 28\n      },\n      {\n        "title": "Health Blogs",\n        "marketShare": 25,\n        "growthRate": 15\n      },\n      {\n        "title": "Personal Trainers",\n        "marketShare": 20,\n        "growthRate": 22\n      },\n      {\n        "title": "Healthcare Providers",\n        "marketShare": 20,\n        "growthRate": 12\n      }\n    ],\n    "keyDifferentiators": [\n      {\n        "title": "Personalized Approach",\n        "description": "Tailored solutions for individual health needs"\n      },\n      {\n        "title": "Mental Health Focus",\n        "description": "Comprehensive mental wellness support"\n      },\n      {\n        "title": "Prevention First",\n        "description": "Early intervention and preventive care"\n      },\n      {\n        "title": "Tech Integration",\n        "description": "Advanced digital health solutions"\n      }\n    ]\n  },\n  trendsAndPatterns: {\n    eCommerceTrends: [\n      {\n        trend: "Mobile Commerce",\n        percentage: 90,\n      },\n      {\n        trend: "App-based Shopping",\n        percentage: 80,\n      },\n      {\n        trend: "Personalization",\n        percentage: 75,\n      },\n    ],\n    userBehaviorPatterns: [\n      {\n        pattern: "Shopping Habits",\n        percentage: 80,\n      },\n      {\n        pattern: "Product Research",\n        percentage: 75,\n      },\n      {\n        pattern: "Social Media Influence",\n        percentage: 60,\n      },\n    ],\n  },\n\n  "visualizedInsights": {\n    "CustomerSatisfaction": [\n      {\n        "title": "Mental Health Solutions",\n        "percentage": 85\n      },\n      {\n        "title": "Digital Health Platforms",\n        "percentage": 92\n      },\n      {\n        "title": "Personalized Healthcare",\n        "percentage": 78\n      }\n    ],\n    "userEngagementMetrics": [\n      {\n        "metric": "Average Time Spent",\n        "value": "12.5 minutes",\n        "percentageChange": 45,\n        "description": "Per session"\n      },\n      {\n        "metric": "Click-through Rate",\n        "value": "4.8%",\n        "percentageChange": 32,\n        "description": "Average CTR"\n      },\n      {\n        "metric": "Content Shares",\n        "value": "2.3K",\n        "percentageChange": 28,\n        "description": "Monthly average"\n      }\n    ],\n  globalMarket: {\n    regions: [\n      {\n        region: "North America",\n        marketShare: 35,\n      },\n      {\n        region: "Europe",\n        marketShare: 28,\n      },\n      {\n        region: "Asia Pacific",\n        marketShare: 25,\n      },\n      {\n        region: "Rest of World",\n        marketShare: 12,\n      },\n    ],\n  },\n  "analyticsReports": {\n    "monthlySummary": {\n      "title": "Monthly Summary",\n      "metrics": [\n        {\n          "name": "Active Users",\n          "value": "↑ 12.5K"\n        },\n        {\n          "name": "Engagement Rate",\n          "value": "↑ 68%"\n        },\n        {\n          "name": "Content Views",\n          "value": "↑ 45K"\n        }\n      ]\n    },\n    "userDemographics": [\n      {\n        "ageGroup": "Age 18-34",\n        "percentage": 45\n      },\n      {\n        "ageGroup": "Age 35-54",\n        "percentage": 35\n      },\n      {\n        "ageGroup": "Age 55+",\n        "percentage": 20\n      }\n    ],\n    "contentPerformance": [\n      {\n        "contentType": "Health Tips",\n        "ctr": 92\n      },\n      {\n        "contentType": "Wellness Guides",\n        "ctr": 85\n      },\n      {\n        "contentType": "Mental Health",\n        "ctr": 78\n      }\n    ],\n    "generatedReports": [\n      {\n        "title": "Monthly Analytics Report",\n        "buttonText": "Download PDF"\n      },\n      {\n        "title": "User Engagement Summary",\n        "buttonText": "Download PDF"\n      }\n    ],\n    "wordcloud": [\n      "cleanser",\n      "moisturizer",\n      "serum",\n      "anti-aging",\n      "exfoliating",\n      "toner",\n      "vitamin C",\n      "hyaluronic acid",\n      "collagen",\n      "acne",\n      "brightening",\n      "skin care",\n      "retinol",\n      "facial mask",\n      "natural",\n      "organic",\n      "SPF",\n      "sunscreen"\n    ]\n  }\n}',
              },
              "TextInput-P0y8s": {},
              "JSONCleaner-qibVv": {
                json_str: "",
                normalize_unicode: true,
                remove_control_chars: true,
                validate_json: false,
              },
              "TextOutput-eU62H": {},
              "ChatOutput-Oxybi": {},
              "TextInput-j9V4m": {
                input_value:
                  'Database Schema:\n\n{\n  "userPainPointsAnalysis": [\n    {\n      "title": "string",\n      "issues": ["string"]\n    }\n  ],\n  "impactScale": [\n    {\n      "title": "string",\n      "percentage": "number"\n    }\n  ],\n  "sentimentAnalysis": {\n    "overallSentiment": {\n      "positive": "number",\n      "negative": "number",\n      "neutral": "number"\n    },\n    "emotionalCategories": {\n      "positive": ["string"],\n      "negative": ["string"],\n      "neutral": ["string"]\n    },\n    "sentimentIntensity": [\n      {\n        "emotion": "string",\n        "percentage": "number"\n      }\n    ]\n  },\n  "engagementAnalysis": {\n    "effectiveHooks": [\n      {\n        "quote": "string",\n        "engagement": "string"\n      }\n    ],\n    "ctaPerformance": [\n      {\n        "cta": "string",\n        "conversion": "number"\n      }\n    ],\n    "contentFormatPerformance": [\n      {\n        "format": "string",\n        "engagement": "number",\n        "description": "string"\n      }\n    ]\n  },\n  "competitorInsights": {\n    "competitors": [\n      {\n        "title": "string",\n        "marketShare": "number",\n        "growthRate": "number"\n      }\n    ],\n    "keyDifferentiators": [\n      {\n        "title": "string",\n        "description": "string"\n      }\n    ]\n  },\n  "trendsAndPatterns": {\n    "Trends": [\n      {\n        "trend": "string",\n        "percentage": "number"\n      }\n    ],\n    "userBehaviorPatterns": [\n      {\n        "pattern": "string",\n        "percentage": "number"\n      }\n    ]\n  },\n  "visualizedInsights": {\n    "CustomerSatisfaction": [\n      {\n        "title": "string",\n        "percentage": "number"\n      }\n    ],\n    "userEngagementMetrics": [\n      {\n        "metric": "string",\n        "value": "string",\n        "percentageChange": "number",\n        "description": "string"\n      }\n    ]\n  },\n  "globalMarket": {\n    "regions": [\n      {\n        "region": "string",\n        "marketShare": "number"\n      }\n    ]\n  },\n  "analyticsReports": {\n    "monthlySummary": {\n      "title": "string",\n      "metrics": [\n        {\n          "name": "string",\n          "value": "string"\n        }\n      ]\n    },\n    "userDemographics": [\n      {\n        "ageGroup": "string",\n        "percentage": "number"\n      }\n    ],\n    "contentPerformance": [\n      {\n        "contentType": "string",\n        "ctr": "number"\n      }\n    ],\n    "generatedReports": [\n      {\n        "title": "string",\n        "buttonText": "string"\n      }\n    ],\n    "wordcloud": ["string"]\n  }\n}\n',
              },
              "MistralModel-vVwq5": {}
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
