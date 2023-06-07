import React from 'react'
import funStops from '../assets/funStops.png';
import funStopsAware from '../assets/fun-stops-aware.png';
import aldernyGCC from '../assets/AGCC_logo.jpg';
import GCLogo from '../assets/GCLogoWhiteBGpng.png';


const Compliance = () => {
  return (
    <div className='complianceCollumns '>
        <div className='gambleAware'>
        <img src={funStops} className= "funStops" alt="when the fun stops logo" Fluid/>
        <img src={funStopsAware} className= "funStopsAware" alt="logo" Fluid/>
        <p>CORE Gaming Limited are committed to the prevention and treatment of gambling related harm.</p>
        </div>
        <div className='gambleAware'>
        <img src={aldernyGCC} className= "funStops" alt="when the fun stops logo" Fluid/>
        <p>CORE Gaming Limited is licensed by Alderney Gaming Control Commission.  https://www.gamblingcontrol.org/</p>
        <p></p>
        </div>
        <div className='gambleAware'>
        <img src={GCLogo} className= "funStops" alt="when the fun stops logo" Fluid/>
        <p>
        CORE Gaming Limited is licensed and regulated in Great Britain by the Gambling Commission under account number 40618
Licensee name – CORE Gaming Limited
Account number – 40618
Unique link for account – https://registers.gamblingcommission.gov.uk/40618
        </p>
        </div>
    </div>
  )
}

export default Compliance