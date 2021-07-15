import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import CheckList from './components/CheckList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        Check List
      </header>
      <Form
      setInputText={setInputText} />
      <CheckList />
    </div>
  );
}

export default App;
