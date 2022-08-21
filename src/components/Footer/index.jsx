import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

function Footer() {
  return (
    <footer className="Footer">
      <span className="Footer-Git">
        <a
          href="https://github.com/Hector14oo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </span>
      <span className="Footer-Me">
        by
        <a
          href="https://github.com/Hector14oo/Hector14oo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hector Davila
        </a>
        - 2022
      </span>
      <span className="Footer-Api">
        Powered and inspired by
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Rick and Morty API
        </a>
      </span>
    </footer>
  );
}

export { Footer };
