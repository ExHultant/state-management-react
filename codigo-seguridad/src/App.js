import { UseState } from './components/use-state.js';
import { ClassState } from './components/class-state.js';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <UseState />
      <ClassState />
    </div>
  );
}

export default App;
