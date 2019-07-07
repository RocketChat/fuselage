import React from 'react';
import { Button, Icon } from '@rocket.chat/fuselage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Button primary>Without theme <Icon name="cross" /></Button>
      <div style={{ '--rcx-button-primary-background': 'tomato' }}>
        <Button primary>With theme <Icon name="check" /></Button>
      </div>
    </div>
  );
}


export default App;
