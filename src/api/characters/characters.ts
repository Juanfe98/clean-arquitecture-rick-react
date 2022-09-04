import api from '../api'
import { Character } from './character_types'

const URLS = {
  fetchAllCharacters: '/character',
}

export const fetchAllCharacters = () => {
  return api.get<Character>(URLS.fetchAllCharacters)
}