// jika menggunakan use state harus di impor terlebih dahulu
import { useState } from 'react';
import './App.css';
import { FunctionalCounter } from './components/FunctionalCounter';

function App() {
  const [message, setMessage] = useState('')
  const [counter, setCounter] = useState(0)
  const handleonReachMax = () => {
    setMessage('You have reached the max value')
  }
  
  // manampilkan alert
  // const handleonReachMax = () => {
  //   alert 'Max reached'
  // }
  return (
    <div className="App">
      <p>{message}</p>
      <p>{counter}</p>
      {/* tambah komponen */}
      <FunctionalCounter 
      name='{1}'
      onCounterChanged={(counter) => setCounter(counter)}
      onReachMax={handleonReachMax}/>
    
    </div>
  );
}

export default App;
