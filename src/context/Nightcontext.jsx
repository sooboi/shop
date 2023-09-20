import { createContext, useContext, useState } from "react";

const NightContext = createContext();

export function NightContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    setToggle((prev) => !prev);
  };

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NightContext.Provider value={{ toggle, handleToggle, MoveToTop }}>
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
