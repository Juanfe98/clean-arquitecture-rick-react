import FullNavbar from './components/Navbar/FullNavbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CharactersList from './views/characters/components/CharactersList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FullNavbar />
      <div className="md:container md:mx-auto mt-10">
        <CharactersList />
      </div>
    </QueryClientProvider>
  )
}
export default App
