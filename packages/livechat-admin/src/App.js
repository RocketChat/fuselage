import React from 'react'
import { Button } from '@rocket.chat/fuselage';
import './App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button primary onClick={() => alert('Hello world!')}>Click me</Button>
      </header>
    </div>
  )
}


export default App
