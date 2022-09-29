import { CharacterData } from '@/api/characters/character_types'
import { Layout } from '@/components/common/Layout'
import Text from '@/components/common/Text'

interface Props {
  character: CharacterData
  index: number
}

const CharacterCard = ({ character, index }: Props) => {
  const { name, status, location, species, gender, origin, image } = character
  return (
    <Layout
      pad={5}
      className="flex-col w-[350px] border rounded-2xl bg-gray-800 md:flex-row md:w-[600px]"
    >
      <img
        src={image}
        alt="character avatar"
        className="rounded-t-2xl md:rounded-2xl"
      />

      <Layout direction="column" pad={5} className="mr-2 md:mb-0 md:w-full">
        <Text color="body" variant="xl" align="left" className="mt-2">
          {name}
        </Text>
        <Text color="body" variant="lg" align="left">
          {status} - {species} - {gender}
        </Text>
        <Text color="body" variant="lg" align="left">
          Last known location: ⬇
        </Text>
        <Text color="body" variant="lg" align="left">
          {location.name}
        </Text>
        <Text color="body" variant="lg" align="left">
          Origin: {origin.name}
        </Text>
        <Text color="subtitle" variant="2xl" align="right">
          #{index}
        </Text>
      </Layout>
    </Layout>
  )
}

export default CharacterCard
