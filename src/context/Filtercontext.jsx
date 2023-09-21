import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState("전체");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  const handleReset = (e) => {
    setFilter("전체");
    setInput("");
    setSearch("");
  };

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        handleFilter,
        input,
        setInput,
        handleInput,
        handleSubmit,
        search,
        handleReset,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
