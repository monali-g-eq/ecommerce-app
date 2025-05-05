import { useState } from 'react'
import { Routes , Route} from "react-router-dom"
import './App.css'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/productDetails'
import Cart from './pages/Cart'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <Routes>
     <Route path="/" element={ <Login/>}/>
      <Route path="/product" element={ <ProductList/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route>404 not found</Route>
      </Routes>
      <Footer/>
   
    </>
  )
}

export default App
