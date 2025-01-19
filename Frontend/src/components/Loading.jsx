import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';

const LoadingSpinner = ({ size = 'w-10 h-10', color = 'text-blue-500', message = 'Loading...' }) => {
  const location = useLocation();
  const { searchQuery, platform } = location.state || {}; // Safely access state
  const [dataState, setDataState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!platform || !searchQuery) return;

    const controller = new AbortController();

    const fetchPlatformData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        let res;

        if (platform === 'reddit') {
          res = await fetch('http://localhost:5000/reddit-analysis', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ niche: searchQuery }),
            signal: controller.signal,
          });
        } else if (platform === 'quora') {
          res = await fetch('http://localhost:5000/quora-scrape', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: searchQuery }),
            signal: controller.signal,
          });
        }

        if (res && res.ok) {
          const data = await res.json();
          setDataState(data);
          console.log(data);
        } else {
          throw new Error('Failed to fetch platform data');
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlatformData();

    return () => {
      controller.abort();
    };
  }, [platform, searchQuery]); // Ensure proper dependencies

  useEffect(() => {
    if (!dataState) return; // Ensure required data is available

    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const Token = 'AstraCS:TLeeeWtlvDNqHbIUZesyvySZ:8c5a931d6d4edf38963cb71eccbe72dffe4d49a0d43754a364dffbd99c070396';
      const API_URL = 'http://localhost:5000/proxy';

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify({
            input_value: JSON.stringify(dataState),
            output_type: 'chat',
            input_type: 'chat',
            tweaks: {
              'ChatInput-SQD9p': {},
              'GroqModel-1mxi2': {},
              'Prompt-cHryr': {},
              'ChatOutput-Iakbm': {},
            },
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();
        console.log('Result:', result);
        setDataState(result);
        setIsLoading(false);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          console.error('Fetch error:', err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [dataState]); // Ensure proper dependencies

  console.log(dataState);
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div
        className={`animate-spin rounded-full border-t-4 border-l-4 border-gray-200 ${color} ${size}`}
      ></div>
      {/* {isLoading && <p>{message}</p>} */}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && dataState && <DashBoard dataState={dataState} />}
    </div>
  );
};

export default LoadingSpinner;
