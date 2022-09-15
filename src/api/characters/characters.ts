import api from '../api'
import { Character, CharacterData } from './character_types'

const URLS = {
  fetchAllCharacters: '/character',
  fetchOneCharacter: '/character',
}

export const fetchAllCharacters = () => {
  return api.get<Character>(URLS.fetchAllCharacters)
}

export const fetchOneCharacter = (characterId: number) => {
  return api.get<CharacterData>(`${URLS.fetchOneCharacter}/${characterId}`)
}