import { useQuery } from '@tanstack/react-query'
import { fetchAllCharacters } from '@/api/characters/characters_api'
import { CharactersResponse } from '@/api/characters/character_types'
import If from '@/components/common/If'
import LazyLoadingIndicator from '@/components/common/LazyLoadingIndicator'
import Text from '@/components/common/Text'
import { Layout } from '@/components/common/Layout'
import CharacterCard from './CharacterCard'

const CharactersList = () => {
  const {
    data: characters,
    isError,
    isLoading,
  } = useQuery<CharactersResponse>(['all-characters'], fetchAllCharacters)
  console.log(
    '🚀 ~ file: CharactersList.tsx ~ line 17 ~ CharactersList ~ isLoading',
    isLoading
  )
  return (
    <>
      {isLoading || isError ? (
        <LazyLoadingIndicator />
      ) : (
        <Layout
          flex
          wrap={true}
          pad={5}
          className="justify-center xl:space-around"
        >
          {characters!.results.map((character, index) => (
            <CharacterCard key={index} character={character} index={index} />
          ))}
        </Layout>
      )}
    </>
  )
}

export default CharactersList
