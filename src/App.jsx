import React, { useState } from 'react';
import './App.css';
import QuarterFinals from './components/QuarterFinals';
import SemiFinals from './components/SemiFinals';
import Finals from './components/Finals';

function App() {
  const [stage, setStage] = useState('quarterFinals'); // Estado inicial: quartas de final

  const handleStageChange = (newStage) => {
    setStage(newStage);
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => handleStageChange('quarterFinals')}>Quartas de Final</button>
        <button onClick={() => handleStageChange('semiFinals')}>Semifinais</button>
        <button onClick={() => handleStageChange('finals')}>Finais</button>
      </div>

      {stage === 'quarterFinals' && <QuarterFinals />}
      {stage === 'semiFinals' && <SemiFinals />}
      {stage === 'finals' && <Finals />}
    </div>
  );
}

export default App;
