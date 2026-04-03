import { Routes,Route} from 'react-router';
import {Homepage} from './Pages/homepage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="checkout" element={<div>Checkout Page</div>} />
    </Routes>
  )
}

export default App
