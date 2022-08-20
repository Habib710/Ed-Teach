import { signOut } from 'firebase/auth'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import CustomLink from '../Custom/CustomLink'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)

  const singout = () => {
    signOut(auth)
  }
  return (
    <Navbar collapseOnSelect className="navbar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className=" fw-2 fs-1 text-dark">
          <span className="c-tomato">Ed</span> Teach
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-css">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/service">Service</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            {user ? (
              <button onClick={singout} className="btn btn-singout">
                Sign Out
              </button>
            ) : (
              <CustomLink to="/login">Login</CustomLink>
            )}
            {user ? '' : <CustomLink to="/signup">SingUp</CustomLink>}
            {user ? <img className='p-img ms-4'   src={user.photoURL} alt="img" /> : ''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
