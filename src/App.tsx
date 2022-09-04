import Characters from './components/Characters/Characters';
import CharacterWithUseApi from './components/Characters/CharactersWithUseApi';

function App() {
  return (
    <div style={{padding: "5rem"}}>
      <header className="App-header">
        <Characters />
        <hr />
        <CharacterWithUseApi />
      </header>
    </div>
  );
}

export default App;
