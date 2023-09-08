import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login></Login>
    </>
  )
}

export default App
