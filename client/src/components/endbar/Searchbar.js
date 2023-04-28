import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

function Searchbar() {
  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      window.open(`https://twitter.com/search?q=${search}&src=typed_query`);
    }
  };

  return (
    <div className="Searchbar">
      <BiSearch />
      <input
        type="text"
        placeholder="Search Twitter"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Searchbar;
