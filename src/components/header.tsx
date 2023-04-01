
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import centralImage from "../assets/images/centralimage.png"
import Nav from 'react-bootstrap/Nav';
import {TbPhoneCall} from 'react-icons/tb'
import { useState, useEffect } from 'react';

const Header = () => {
  
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {

        if (window.scrollY >= 10) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
  }

  useEffect(() => {
    
    changeBackground()
    window.addEventListener("scroll", changeBackground)
    return ()=>{
      window.removeEventListener('scroll', changeBackground)
    }
  },[])



  

  return (
      <Navbar bg="blue-100" className={`${navbar?'position-sticky top-0 zIndex-1024 shadow-sm':''}`}>
        <Container>
          <Navbar.Brand href="/welcome">
            {/* <img
              src={centralImage}
              width="auto"
              height="80"
              className="d-inline-block align-top"
              alt="First Central logo"
            /> */}
            <h1 className='mb-0'>LOGO</h1>
          </Navbar.Brand>
          <Nav>
            <a className='text-decoration-none d-flex justify-content-between align-items-center'  href="tel:03555432777"> <TbPhoneCall className='me-2' size={24}/>03330432022</a>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header