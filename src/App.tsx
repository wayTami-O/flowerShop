import MainPage from './pages/MainPage'
import BasketFlower from './pages/BasketFlower'
import Flower from './pages/Flower'
import Flowers from './pages/Flowers'
import WishList from './pages/WishList'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/wedding_flowers' element={<Flowers />}/>
        <Route path='/flower'  element={<Flower />}/>
        <Route path='/baskets_flowers'  element={<BasketFlower />}/>
        <Route path='/wishList' element={<WishList />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes> 
    </>
  )
}

export default App
