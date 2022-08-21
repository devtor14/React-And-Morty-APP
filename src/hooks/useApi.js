import { useState, useEffect } from "react";

const APIType = {
  base: "https://rickandmortyapi.com/api",
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

const randomCharacters = Array.from({ length: 10 }, (Item) =>
  Math.floor(Math.random() * 826)
);

function useApi(API) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `${APIType[API] || API}/${API === "characters" ? randomCharacters : ""}` ||
        APIType["base"]
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [API, setData]);

  return data;
}

export { useApi };
