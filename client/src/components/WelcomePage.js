import React from 'react'
import welcomeImage from '../assets/laptopDesktopDevice.png';


const WelcomePage = () => {
  return (
    <div>
        <h1>Welcome to CORE Gaming</h1>
        <div className='welcomePageText'>
            <p>Part of the Sky Betting & Gaming Group, Core Gaming is a leading developer of HTML5 games specifically produced to give the very best user experience possible on desktop and all of the most popular mobile devices, operating systems and current browsers.</p>
            <p>Utilising their vast industry knowledge and expertise in multiple platform integration and deployment, they have created an efficient, flexible and adaptable HTML5 framework designed to keep them at the forefront of gaming development technology for many years to come.</p>
            <p>CORE proprietary slot, table and instant win content has always been in huge demand with the major operators in the UK and internationally. A major delivery roadmap of exciting new games and proven library content, is now in progress for tier 1 North American operators and the NYX Gaming/SG Digital Group network through both Malta and Gibraltar.</p>
        </div>
        {/* <img src={welcomeImage} className="WelcomePageDevices" alt="Selection of devices with casione games" /> */}

    </div>
  )
}

export default WelcomePage