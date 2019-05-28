import React from 'react'
import { Button } from '@rocket.chat/fuselage';
import './App.css'


function App() {
  return (
    <div className="App">
      <Button primary>Without theme</Button>
      <div style={{ '--rc-color-button-primary': 'tomato' }}>
        <Button primary>With theme</Button>
      </div>
    </div>
  )
}


export default App
