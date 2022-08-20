import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Error from './Components/Error/Error'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Requeir from './Components/Requeir/Requeir'
import Service from './Components/services/Service'
import SingUp from './Components/SingUp/SingUp';
import 'animate.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path="/service/:id" element={ 
       <Requeir> <Service></Service></Requeir>
        }></Route>
        <Route path="/service" element={
          <Requeir><Service></Service></Requeir>
        
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
      <Route path='/signup' element={<SingUp></SingUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
