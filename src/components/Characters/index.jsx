import { useState, useReducer, useMemo, useRef, useCallback } from "react";
import { Search } from "../Search/index.jsx";
import { useApi } from "../../hooks/useApi.js";
import { FirstSeen } from "./FirstSeen/index.jsx";
import { FavMenu } from "./FavMenu/index.jsx";
import "./styles.css";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

function Characters() {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");

  const searchInput = useRef(null);

  const dataCharacters = useApi("characters");

  const handleClick = (event, FavCharacter) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: FavCharacter });
    event.target.disabled = true;
    event.target.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;
  };

  const handleSearch = useCallback(
    () => setSearch(searchInput.current.value),
    []
  );

  const filteredUsers = useMemo(
    () =>
      dataCharacters.filter((character) =>
        character.name.toLowerCase().includes(search.toLocaleLowerCase())
      ),
    [dataCharacters, search]
  );

  return (
    <main className="Characters-Container">
      <FavMenu array={favorites.favorites} />

      <section>
        <Search
          searchInput={searchInput}
          search={search}
          handleSearch={handleSearch}
        />
      </section>

      <section className="Characters-List">
        {filteredUsers.map((character) => (
          <article key={`Char-${character.id}`} className="Character">
            <img src={character.image} alt={`Imagen de ${character.name}`} />
            <div className="Character-Info">
              <div>
                <a href={character.url} className="Character-Info-Name">
                  {character.name}
                </a>
                <span className="Character-Info-Status">
                  <span className={`Status-Circle ${character.status}`}></span>
                  {character.status} - {character.species}
                </span>
              </div>
              <div>
                <p className="Character-Info-Title">Last known location:</p>
                <a
                  href={character.location.url}
                  className="Character-Info-Anchor"
                >
                  {character.location.name}
                </a>
              </div>
              <div>
                <p className="Character-Info-Title">First seen in:</p>
                <FirstSeen
                  episodeURL={character.episode[0]}
                  className="Character-Info-Anchor"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(event) => handleClick(event, character)}
            >
              Add To Favorites
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export { Characters };
