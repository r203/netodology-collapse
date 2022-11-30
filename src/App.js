// import { useState } from 'react';
import './App.css';
import Collapse from './components/Collapse';

function App() {

  return (
    <div className="App">
      <Collapse title='collapsedLabel' ariaControls={'collapseExample1'} collapsedLabel/>
      <Collapse title='expandedLabel' ariaControls={'collapseExample2'} expandedLabel/>

    </div>
  );
}

export default App;
