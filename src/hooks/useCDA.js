import { useEffect, useState } from "react";
import hash from "../utils/simple-hash";

const store = window.localStorage;

export function useCDA(url) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    // optional local caching in the browser
    const cacheKey = hash(url);
    const cachedData = store.getItem(cacheKey);

    if (cachedData) {
      setResults(JSON.parse(cachedData));
    } else {
      fetch(url, {
        headers: {
          Accept: "application/json;version=2",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          store.setItem(cacheKey, JSON.stringify(data));
          setResults(data);
        })
        .catch((err) => {
          console.error(err);
          setResults(null);
        });
    }
  }, [url]);

  return results;
}
