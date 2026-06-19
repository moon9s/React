
import './tailwind.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import PR from './pages/PR'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Layout from './components/Layout'
import ProductDetails from './pages/ProductDetails'




function App() {

  return (

    <BrowserRouter>

   
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/pr' element={<PR />} />
            <Route path='/*' element={<NotFound />} />
            </Route>


          <Route />
        </Routes>
     
    </BrowserRouter>


  )

}

export default App