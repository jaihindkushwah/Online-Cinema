import React, { createContext, useContext, useState } from "react";

const CreateSearchContext = createContext(null);
function SearchContext({ children }) {
  const [searchInput, setSearchInput] = useState({
    type: "movie",
    searchValue: "",
  });

  return (
    <CreateSearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </CreateSearchContext.Provider>
  );
}
export const useSearchState = () => {
  return useContext(CreateSearchContext);
};

export default SearchContext;
