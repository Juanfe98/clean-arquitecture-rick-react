import React, { useEffect, useState } from 'react';

import { fetchAllCharacters } from '../../api/characters/characters';
import { CharacterData } from '../../api/characters/character_types';

const useFetchAllCharacters = () => {
  const [characters, setCharacters] = useState<CharacterData[]>()
  
  const initFetchAllCharacters =  React.useCallback(
    async () => {
      const { data } = await fetchAllCharacters()
      setCharacters(data.results);
    },[]
  );

  return {
    characters,
    initFetchAllCharacters,
  }
}

const Characters = () => {

  const { characters, initFetchAllCharacters} = useFetchAllCharacters();

  useEffect(()  => {
    initFetchAllCharacters();
  },[initFetchAllCharacters])

  return (
    <>
      <span>Character's Page</span>
      <span>{JSON.stringify(characters)}</span>
    </>
  )
}

export default Characters;