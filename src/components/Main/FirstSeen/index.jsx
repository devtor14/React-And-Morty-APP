import React from "react";
import { useApi } from "../../../hooks/useApi";

function FirstSeen({ episodeURL, className }) {
  const episode = useApi(episodeURL);
  return (
    <a
      href={episodeURL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {episode.name}
    </a>
  );
}

export { FirstSeen };
