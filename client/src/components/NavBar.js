// import introLogo from '../introLogo.png';
import introLogo from '../assets/introLogo.png';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


import React from 'react'

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand  href="#home">
                <img
                src={introLogo}
                width="150"
                height="60"
                className="d-inline-block align-top"
                alt="CORE Gaming Logo"
                />
          </Navbar.Brand>
        </Container>

    </Navbar>



  )
}

export default NavBar