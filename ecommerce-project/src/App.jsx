import { Routes,Route} from 'react-router';
import {Homepage} from './Pages/homepage';
import {Checkoutpage} from './Pages/Checkoutpage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="checkout" element={<Checkoutpage/>} />
    </Routes>
  )
}

export default App
