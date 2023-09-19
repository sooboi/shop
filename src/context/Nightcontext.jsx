import { createContext, useContext, useState } from "react";

const NightContext = createContext();

export function NightContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };

  return (
    <NightContext.Provider value={{ toggle, handleToggle }}>
      <div
        className={
          toggle
            ? "transition-all  bg-black text-white "
            : "transition-all bg-white"
        }
      >
        {children}
      </div>
    </NightContext.Provider>
  );
}

export function useNightContext() {
  return useContext(NightContext);
}
