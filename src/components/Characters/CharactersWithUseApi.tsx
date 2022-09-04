import { useCallback, useEffect } from 'react';

import { fetchAllCharacters } from '../../api/characters/characters';
import { useApi } from '../../api/hooks/useApi';


const useFetchAllCharacters = () => {
  const {
    data: characters,
    exec: initFetchAllCharacters,
    status: fetchAllCharactersStatus,
    isPending: isFetchAllCharactersPending,
    isError: isFetchAllCharactersError,
    isSuccess: isFetchAllCharactersSuccess,
  } = useApi( useCallback (() => fetchAllCharacters(),[]));

  return {
    characters,
    initFetchAllCharacters,
    fetchAllCharactersStatus,
    isFetchAllCharactersPending,
    isFetchAllCharactersError,
    isFetchAllCharactersSuccess,
  }
};

function CharacterWithUseApi(){
  const { 
    characters, 
    initFetchAllCharacters, 
    isFetchAllCharactersPending,
    isFetchAllCharactersError,
    isFetchAllCharactersSuccess,
  } = useFetchAllCharacters();

  useEffect(()  => {
    initFetchAllCharacters();
  },[initFetchAllCharacters])

  return (
    <>
      <span>Character's Page</span>
      { isFetchAllCharactersError && "Error fetching characters"}
      { isFetchAllCharactersPending && "Pending fetching characters"}
      { isFetchAllCharactersSuccess && 
        <span>{JSON.stringify(characters)}</span>
      }
    </>
  )
}

export default CharacterWithUseApi;
