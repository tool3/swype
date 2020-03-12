import React from 'react'
import Swype from '../src/components/Swype'
import '../src/components/Swype.css';

const App = () => (
  <div>
    <h1>Hello Swip</h1>
    <Swype cards={[{ title: '#1', content: 'hello world' }]} />
  </div>
)

export default App
