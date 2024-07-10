import AgentsBoardDebugger from './AgentsBoardDebugger';
import team from './teams/productSpecsTeam';

function App() {
  return (
    <>
      <h1>AgenticJS Playground</h1>
      <AgentsBoardDebugger team={team}/>
    </>
  )
}

export default App
