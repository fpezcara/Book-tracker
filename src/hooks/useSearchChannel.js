import { useEffect, useState } from "react";
import { API_URL } from "../constants";
const useSearchChannel = (searchInput, selectType) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchInput) return;

    if (!searchInput || !selectType) return;
    const wsApiUrl = API_URL.replace(/^https?/, "ws");

    console.log("ws irl", wsApiUrl);
    const ws = new WebSocket(`${wsApiUrl}/cable`);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            // channel: `search_${searchInput}_${selectType}`,
            channel: "SearchChannel",
            query: searchInput,
            search_by: selectType,
          }),
        }),
      );
    };

    ws.onmessage = (event) => {
      console.log("event....", event);
      try {
        const data = JSON.parse(event.data);
        if (
          data?.message?.message?.data &&
          Array.isArray(data.message.message.data)
        ) {
          console.log("DATA: ", data);

          setSearchResults(data.message.message.data);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [searchInput, selectType]);

  return searchResults;
};

export default useSearchChannel;
