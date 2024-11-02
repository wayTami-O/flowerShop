import MainPage from './pages/MainPage'
import BasketFlower from './pages/BasketFlower'
import Bouquet from './pages/Bouquet'
import WeddingFlowers from './pages/WeddingFlowers'
import { Routes, Route } from 'react-router-dom'
import './index.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/wedding_flowers' element={<BasketFlower />}/>
        <Route path='/bouquet'  element={<Bouquet />}/>
        <Route path='/baskets_flowers'  element={<WeddingFlowers />}/>
      </Routes> 
    </>
  )
}

export default App
