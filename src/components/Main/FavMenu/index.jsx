import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./styles.css";

function FavMenu({ array }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className={`Characters-Favs Open-${toggle}`}>
        <h1 className="Characters-Fav-Title">Your Favorites Characters</h1>
        <div className="Characters-Favs-List">
          {array.map((character) => (
            <figure key={`Fav-${character.id}`} className="Character-Fav-Item">
              <img src={character.image} alt={`Imagen de ${character.name}`} />
            </figure>
          ))}
        </div>
      </aside>
      <button
        className={`Fav-Menu-Button Button-${toggle}`}
        onClick={() => setToggle(!toggle)}
      >
        <BsFillStarFill />
      </button>
    </>
  );
}

export { FavMenu };
