import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import { DataProvider } from './context/DataContext'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'

function App() {
   
  return (
    
    <BrowserRouter>
     <CartProvider> 
      <DataProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:slug' element={<SingleProduct/>}/>
            <Route path='/category/:category' element={<CategoryProduct/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/>
      </DataProvider>
      </CartProvider>
     
    </BrowserRouter>
  )
}

export default App
