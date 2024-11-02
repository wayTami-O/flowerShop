import MainPage from './pages/MainPage'
import BasketFlower from './pages/BasketFlower'
import Bouquet from './pages/Bouquet'
import Flowers from './pages/Flowers'
import { Routes, Route } from 'react-router-dom'
import './index.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/wedding_flowers' element={<Flowers />}/>
        <Route path='/bouquet'  element={<Bouquet />}/>
        <Route path='/baskets_flowers'  element={<BasketFlower />}/>
      </Routes> 
    </>
  )
}

export default App
