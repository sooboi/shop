import { createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState("all");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        handleFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
