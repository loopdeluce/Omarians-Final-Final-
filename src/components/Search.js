function Search({ handleSearch, searchTerm, handleSort }) {
  return (
    <div className="filter">
      <select id="sort-dropdown" onChange={(e) => handleSort(e.target.value)}>
        <option className="sort-option" value="choose">
          --Choose Sort by--
        </option>
        <option className="sort-option" value="aToZ">
          Alphabetically A to Z
        </option>
        <option className="sort-option" value="zToA">
          Alphabetically Z to A
        </option>
        <option className="sort-option" value="dateOldToNew">
          Date Oldest to Newest
        </option>
        <option className="sort-option" value="dateNewToOld">
          Date Newest to Oldest
        </option>
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
