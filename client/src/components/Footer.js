import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FiLinkedin } from 'react-icons/fi'
import { SiGlassdoor } from 'react-icons/si'
import CookiesModal from './CookiesModal'

const Footer = () => {
  return (
    <Container className='footer'>

      <Row className='checkUsOutContainer'>
        <Col className='footerLinkContainer cookies'>
          <h4>Check us out </h4>
          <Row>
          <a href='https://www.linkedin.com/company/core-gaming-limited/mycompany/' target={'blank'} rel='noreferrer' className='checkUsOutIcon linkedInLink' >
            <FiLinkedin/>
          </a>
          
          <a href='https://www.glassdoor.co.uk/Overview/Working-at-Core-Gaming-EI_IE2087174.11,22.htm' target={'blank'} rel='noreferrer' className='checkUsOutIcon glassDoorLink' >
            <SiGlassdoor/>
          </a>
          </Row>

        </Col>
      </Row>


      <Row>
        <Col className='address'>
          <h4>Contact Us </h4>
          <Row className='contactUsText'>CORE Gaming Ltd</Row>
          <Row className='contactUsText'>2nd Floor Dominion Court</Row>
          <Row className='contactUsText'>39 Station Road | Solihull</Row>
          <Row className='contactUsText'>West Midlands | B91 3RT</Row>
        </Col>
      </Row>

      <Row>
        <Col >
          <Row> <CookiesModal/></Row>
          <Row className='copyRightFooter'>© 2015 CORE Gaming Ltd</Row>
        </Col>
      </Row>


    </Container>

  )
}

export default Footer