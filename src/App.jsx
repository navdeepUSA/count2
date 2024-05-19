import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges" >
      <TimeChallenge title="easy" targetTime={1}/>
      <TimeChallenge title="not east" targetTime={5}/>
      <TimeChallenge title="hard" targetTime={10}/>  
      <TimeChallenge title="too hard" targetTime={15}/>
      <TimeChallenge title=" hard pro" targetTime={20}/>
      </div>
    </>
  );
}

export default App;
