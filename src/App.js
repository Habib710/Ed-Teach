import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/header'
import Home from './Components/Home/Home'
import Service from './Components/services/Service'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:id" element={<Service></Service>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
