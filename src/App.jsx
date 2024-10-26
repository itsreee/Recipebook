import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import { Route,Routes } from 'react-router-dom'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
function App() {

  return (
    <>
     <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/*' element={<Pnf/>}/>
      <Route path= '/:id/view' element={<View/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
