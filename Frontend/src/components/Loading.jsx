import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';

const LoadingSpinner = ({ size = 'w-10 h-10', color = 'text-blue-500', message = 'Loading...' }) => {
  const location = useLocation();
  const { searchQuery, platform } = location.state || {}; // Safely access state

  const [dataState, setDataState] = useState(null);
  const [outputState, setOutputState] = useState(null);
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

        if (platform === 'reddit') {
          res = await fetch('https://lx4g6mwt-5000.use.devtunnels.ms/reddit-analysis', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ niche: searchQuery }),
            signal: controller.signal,
          });
        } else if (platform === 'quora') {
          res = await fetch('https://lx4g6mwt-5000.use.devtunnels.ms/quora-scrape', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: searchQuery }),
            signal: controller.signal,
          });
        }

        if (res.ok) {
          const data = await res.json();
          setDataState(data);
        } else {
          throw new Error('Failed to fetch platform data');
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
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
      const Token = 'AstraCS:TLeeeWtlvDNqHbIUZesyvySZ:8c5a931d6d4edf38963cb71eccbe72dffe4d49a0d43754a364dffbd99c070396';
      const API_URL = 'https://lx4g6mwt-5000.use.devtunnels.ms/proxy';

      try {
        setIsSecondFetchLoading(true);
        setErrorSecondFetch(null);

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

        if (response.ok) {
          const result = await response.json();
          setOutputState(result);
        } else {
          throw new Error(`Request failed: ${response.status}`);
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
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

  return (
    <div className="flex flex-col items-center justify-center space-y-2 h-[750px]">
      {(isFirstFetchLoading || isSecondFetchLoading) && (
        <>
          <div
            className={`animate-spin rounded-full border-t-4 border-l-4 border-gray-200 ${color} ${size}`}
          ></div>
          <p>loading{message}</p>
        </>
      )}

      Loading
      {errorFirstFetch && <p className="text-red-500">Error: {errorFirstFetch}</p>}
      {errorSecondFetch && <p className="text-red-500">Error: {errorSecondFetch}</p>}
      {!isFirstFetchLoading && !isSecondFetchLoading && outputState && (
        <DashBoard outputState={outputState} />
      )}
    </div>
  );
};

export default LoadingSpinner;
