import { useEffect, useState } from "react";
import hash from "../utils/simple-hash";

const store = window.localStorage;

export function useCDA(url) {
  const [results, setResults] = useState(null);
  useEffect(() => {
    console.log("checking cache");
    const cacheKey = hash(url);
    console.log("cache key:", cacheKey);
    const cachedData = store.getItem(cacheKey);
    if (cachedData) {
      console.log("using cached data");
      setResults(JSON.parse(cachedData));
    } else {
      console.log("running fetch");
      fetch(url, {
        headers: {
          Accept: "application/json;version=2",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          console.log("got data");
          store.setItem(cacheKey, JSON.stringify(data));
          setResults(data);
        })
        .catch((err) => {
          console.log(err);
          setResults(null);
        });
    }
  }, [url]);
  console.log("running useCDA", results);
  return results;
}
