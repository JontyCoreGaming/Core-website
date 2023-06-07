import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import CookiesModal from './CookiesModal'

const Footer = () => {
  return (
    <Container className='footer'>

      <Row>
        <Col>
          <h3>Check us out </h3>
          <Row>linked in</Row>
          <Row>glass door</Row>

        </Col>
      </Row>


      <Row>
        <Col>
          <h3>Contact Us </h3>
          <Row>CORE Gaming Ltd</Row>
          <Row>2nd Floor Dominion Court</Row>
          <Row>39 Station Road | Solihull</Row>
          <Row>West Midlands | B91 3RT</Row>
        </Col>
      </Row>

      <Row>
        <Col >
          <Row> Cookie Policy- this needs the modal</Row>
          <Row> <CookiesModal/> </Row>
          <Row>© 2015 CORE Gaming Ltd</Row>
        </Col>
      </Row>


    </Container>

  )
}

export default Footer