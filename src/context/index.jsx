import {createContext, useState} from "react";

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  return (
    <Context.Provider
      value={{
        characters,
        setCharacters,
        isLoading,
        setIsLoading
      }}
    >
      {children}
      
    </Context.Provider>
  );
}
export default ContextProvider