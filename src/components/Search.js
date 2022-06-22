function Search({ handleSearch, searchTerm, handleSort }) {
  return (
    <div className="filter">
      <select id="sort-dropdown" onChange={(e) => handleSort(e.target.value)}>
        <option value="choose">--Choose Sort by--</option>
        <option value="aToZ">Alphabetically A to Z</option>
        <option value="zToA">Alphabetically Z to A</option>
      </select>
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => handleSearch(e)}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
