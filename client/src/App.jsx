import { useState } from 'react';
import './App.css';

//components
import InputHeader from './components/inputHeader';
import List from './components/list';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='container'>
        <InputHeader/>
        <List/>
      </div>
    </>
  )
}

export default App
