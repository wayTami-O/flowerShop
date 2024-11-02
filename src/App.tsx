import MainPage from './pages/MainPage'
import BasketFlower from './pages/BasketFlower'
import Flower from './pages/Flower'
import Flowers from './pages/Flowers'
import WishList from './pages/WishList'
import { Routes, Route } from 'react-router-dom'
import './index.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/wedding_flowers' element={<Flowers />}/>
        <Route path='/flower'  element={<Flower />}/>
        <Route path='/baskets_flowers'  element={<BasketFlower />}/>
        <Route path='/wishList' element={<WishList />}/>
      </Routes> 
    </>
  )
}

export default App
