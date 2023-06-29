import { createContext, useRef } from "react";

const ScrollContext = createContext({});

export const ScrollContextProvider = ({ children }: any) => {
  return (
    <ScrollContext.Provider
      value={{
        productsRef: useRef(),
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
