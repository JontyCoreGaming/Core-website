import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import funStops from '../assets/funStops.png';
import funStopsAware from '../assets/fun-stops-aware.png';
import aldernyGCC from '../assets/AGCC_logo.jpg';
import GCLogo from '../assets/GCLogoWhiteBGpng.png';

const ComplianceAlternative = () => {
    return (
        <div className='complianceCollumns '>
            <span id='jump_to_this_location' className='navLink'></span>

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
                        <p className='complianceTextItems licenseText'>CORE Gaming Limited is licensed and regulated in Great Britain by the Gambling Commission under account number 40618</p>
                        <p className='complianceTextItems licenseText'>Licensee name – CORE Gaming Limited</p>
                        <p className='complianceTextItems licenseText '>Account number – 40618</p>
                        <p className='complianceTextItems licenseText '>Unique link for account – https://registers.gamblingcommission.gov.uk/40618</p>
                    </Col>

                </Row>
            </Container>




        </div>
    )
}

export default ComplianceAlternative