import { useContext, useEffect, useState } from "react";
import { getChartactersAll } from "../api";
import { Context } from "../context";

export const useFetchCharacters = () => {
  const { characters, setCharacters, isLoading, setIsLoading } =
    useContext(Context);

  const getCharacters = async () => {
    setIsLoading(true);
    const listaCharacters = await getChartactersAll();
    setCharacters(listaCharacters);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters,
    isLoading,
  };
};
