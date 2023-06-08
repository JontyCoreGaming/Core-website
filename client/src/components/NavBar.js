// import introLogo from '../introLogo.png';
import introLogo from '../assets/introLogo.png';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



import React from 'react'

const jump = () => {
  console.log("this is now clicked")
  document.getElementById("jump_to_this_location").scrollIntoView({behavior: 'smooth'});
}

const NavBar = () => {
  return (
    <Navbar /** sticky="top" */ bg="dark" expand="lg">
        <Container>
            <Navbar.Brand  href="#home">
                <img
                src={introLogo}
                width="200"
                height="auto"
                className="d-inline-block align-top"
                alt="CORE Gaming Logo"
                />
          </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={jump} href="#compliance" className='navLink'>Compliance</Nav.Link>
          </Nav>
        </Container>

    </Navbar>



  )
}

export default NavBar