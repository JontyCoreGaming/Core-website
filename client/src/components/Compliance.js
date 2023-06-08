import React from 'react'
import funStops from '../assets/funStops.png';
import funStopsAware from '../assets/fun-stops-aware.png';
import aldernyGCC from '../assets/AGCC_logo.jpg';
import GCLogo from '../assets/GCLogoWhiteBGpng.png';


import { Row, Col, Container } from 'react-bootstrap'
// import { FiLinkedin } from 'react-icons/fi'
// import { SiGlassdoor } from 'react-icons/si'
// import CookiesModal from './CookiesModal'


const Compliance = () => {
  let toggle = true

  const showMore = () => {
    if (toggle) {
      document.getElementById('more').style.display = "block";
      toggle = false
      document.getElementById('elipses').innerHTML = "";

    } else {
      document.getElementById('more').style.display = "none";
      document.getElementById('elipses').innerHTML = "More ...";
      toggle = true
    }
    console.log('this is the seccond toggle', toggle)
  }
  return (

    <div className='complianceCollumns '>
      <span id='jump_to_this_location'></span>

      <Container className='complianceTable'>
        <Row>
          <Col>
            <img src={funStops} className="funStops" alt="when the fun stops logo" Fluid />
            <img src={funStopsAware} className="funStops" alt="logo" Fluid />
          </Col>
          <Col>
            <img src={aldernyGCC} className="funStops" alt="alderny gambling comission logo" Fluid />
          </Col>
          <Col>
            <img src={GCLogo} className="funStops" alt="gambling comission logo" Fluid />
          </Col>

        </Row>
        <Row>
          <Col>
            <p className='complianceTextItems'>CORE Gaming Limited are committed to the prevention and treatment of gambling related harm.</p>
          </Col>
          <Col>
            <p className='complianceTextItems'>CORE Gaming Limited is licensed by Alderney Gaming Control Commission.  https://www.gamblingcontrol.org/</p>
          </Col>
          <Col>
            <div onMouseEnter={showMore} onMouseLeave={showMore} id='link'>
              <p className='complianceTextItems licenseText'>CORE Gaming Limited is licensed and regulated in Great Britain by the Gambling Commission under account number 40618</p>
              <div id='more'  >

                <p className='complianceTextItems licenseText'>Licensee name – CORE Gaming Limited</p>
                <p className='complianceTextItems licenseText '>Account number – 40618</p>
                <p className='complianceTextItems licenseText '>Unique link for account – https://registers.gamblingcommission.gov.uk/40618</p>
              </div>
              <p className="link-button" id='elipses' >More ...</p>
            </div>
          </Col>

        </Row>
      </Container>




    </div>
  )
}

export default Compliance