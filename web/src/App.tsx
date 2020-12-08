import React, {useState} from 'react';
import './App.css';

function App() {
  const [hasImperfection, setHasImperfection] = useState(true)

  const cleanComponent = () => {
    setHasImperfection(false);
  }
  return (
    <div className="App">
      <main className="App-header">
        {
          hasImperfection ?
            <>
              <span role="img" aria-label="shame-monkey" className="emoji">🙈</span>
              <p className="text">Your symbol has pixel imperfections</p>
              <button className="button" onClick={cleanComponent}> Clean my symbol</button>
            </> :
            <>
              <span role="img" aria-label="congratulation" className="emoji">🍾</span>
              <p className="text">Your symbol is perfect</p>
            </>
        }
      </main>
    </div>
  );
}

export default App;
