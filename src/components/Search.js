const Search = ({ query, setQuery }) => {
  return (
    <header>
      <h2 className="header__title">Search it. Explore it. Buy it.</h2>
      <input
        type="text"
        className="header__search"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
};

export default Search;
