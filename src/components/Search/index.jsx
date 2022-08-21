import "./styles.css";

function Search({ searchInput, search, handleSearch }) {
  return (
    <input
      type="text"
      ref={searchInput}
      value={search}
      onChange={handleSearch}
      className="Characters-Search"
      placeholder="Search a character"
    />
  );
}

export { Search };
