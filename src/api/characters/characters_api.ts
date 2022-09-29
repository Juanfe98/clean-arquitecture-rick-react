import api from '../api'
import { CharactersResponse, CharacterData } from './character_types'

const URLS = {
  fetchAllCharacters: '/character',
  fetchOneCharacter: '/character'
}

export const fetchAllCharacters = () => {
  return api
    .get<CharactersResponse>(URLS.fetchAllCharacters)
    .then(response => response.data)
}

export const fetchOneCharacter = (characterId: number) => {
  return api.get<CharacterData>(`${URLS.fetchOneCharacter}/${characterId}`)
}
