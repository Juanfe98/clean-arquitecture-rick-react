import React, { useEffect, useState } from 'react'

import { fetchAllCharacters } from '../../api/characters/characters_api';
import { CharacterData } from '../../api/characters/character_types';
import { ERROR, IDLE, PENDING, SUCCESS } from '../../api/constants/apiStatus';
import { useApiStatus } from '../../api/hooks/useApiStatus';
import { withAsync } from '@/helpers/withAsync';
import LazySpinner from '../common/LazySpinner';

const useFetchAllCharacters = () => {
  const [characters, setCharacters] = useState<CharacterData[]>()

  const {
    status: fetchAllCharactersStatus,
    setStatus: setFetchAllCharactersStatus,
    isIdle: isFetchAllCharactersStatusIdle,
    isPending: isFetchAllCharactersPending,
    isError: isFetchAllCharactersError,
    isSuccess: isFetchAllCharactersSuccess,
  } = useApiStatus(IDLE)

  const initFetchAllCharacters = React.useCallback(async () => {
    setFetchAllCharactersStatus(PENDING)
    const { response, error } = await withAsync(() => fetchAllCharacters())

    if (error) {
      setFetchAllCharactersStatus(ERROR)
    } else {
      setFetchAllCharactersStatus(SUCCESS)
      setCharacters(response?.results)
    }
  }, [setFetchAllCharactersStatus])

  return {
    characters,
    initFetchAllCharacters,
    fetchAllCharactersStatus,
    isFetchAllCharactersStatusIdle,
    isFetchAllCharactersPending,
    isFetchAllCharactersError,
    isFetchAllCharactersSuccess,
  }
}

const Characters = () => {
  const {
    characters,
    initFetchAllCharacters,
    isFetchAllCharactersPending,
    isFetchAllCharactersError,
    isFetchAllCharactersSuccess,
  } = useFetchAllCharacters()

  useEffect(() => {
    initFetchAllCharacters()
  }, [initFetchAllCharacters])

  return (
    <>
      <span className="text-lg">Character's Page</span>
      {isFetchAllCharactersError && 'Error fetching characters'}
      {isFetchAllCharactersPending && 'Pending fetching characters'}
      {isFetchAllCharactersSuccess && <span>{JSON.stringify(characters)}</span>}
      {/* {isFetchAllCharactersSuccess && <LazySpinner show={true} />} */}
    </>
  )
}

export default Characters
