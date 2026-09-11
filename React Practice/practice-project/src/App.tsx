import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Man from './pages/Man'
import Women from './pages/Women'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='*' element ={<Notfound/>}/>

        <Route path='/product' element={<Product/>}>
           <Route path='men' element={<Man/>}/>
           <Route path='women' element={<Women/>}/>
        </Route>
      </Routes>
            
    </div>
  )
}

export default App
