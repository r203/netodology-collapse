// import { useState } from 'react';
import './App.css';
import Collapse from './components/Collapse';

function App() {
  let collapsedLabel = 'Развернуть';
  let expandedLabel = 'Свернуть';

  return (
    <div className="App">
      <Collapse 
        collapsedLabel={collapsedLabel}
        expandedLabel={expandedLabel}
        />

    </div>
  );
}

export default App;
