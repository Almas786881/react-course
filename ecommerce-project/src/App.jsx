import { Routes,Route} from 'react-router';
import {Homepage} from './Pages/homepage';
import {Checkoutpage} from './Pages/Checkoutpage';
import {Orderpage} from './Pages/orderpage'; 
import {Trackingpage} from './Pages/trackingpage'; 

import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="checkout" element={<Checkoutpage/>} />
      <Route path="orders" element={<Orderpage/>} />
      <Route path="tracking" element={<Trackingpage/>} />
    </Routes>
  )
}

export default App
