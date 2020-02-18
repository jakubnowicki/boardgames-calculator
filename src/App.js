import React from 'react';
import InputNumeric from './components/input.js';
import CategoryLabel from './components/category_label.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <CategoryLabel/>
      <InputNumeric/>
    </div>
  );
}

export default App;
