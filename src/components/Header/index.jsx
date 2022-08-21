import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Logo from "../../assets/logo.png";
import "./styles.css";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="Header">
      <nav className="Header-Navbar">
        <div className="Header-Navbar-Left">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <span>React Hooks</span>
        </div>
        <button type="button" onClick={() => setTheme(!theme)}>
          <>
            <span className="Button-Text">
              <span className={`Text Dark-${theme}`}>Dark</span>
              <span className={`Text Light-${theme}`}>Light</span>
            </span>
            <span className={`Button-Figure Figure-${theme}`}>
              <BsFillSunFill className={`Figure Sun-${theme}`} />
              <BsFillMoonFill className={`Figure Moon-${theme}`} />
            </span>
          </>
        </button>
      </nav>
      <section className="Header-Section">
        <h1>The React And Morty App</h1>
      </section>
    </header>
  );
}

export { Header };
