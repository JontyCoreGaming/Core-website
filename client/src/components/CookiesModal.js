import React from 'react'
import { useState } from 'react'; //this can be refactored 
import Modal from 'react-bootstrap/Modal';

const CookiesModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Cookie Policy            </Button> */}

            {/* <div onClick={handleShow}> */}
            {/* </div>  */}

            <button className="link-button" onClick={handleShow}  >Cookie Policy</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cookie Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>CORE Gaming LTD are strongly committed to protecting the privacy of users of this website, continually auditing back-end technologies to ensure compliance to EC Directives. To make coregaming.co.uk simpler, we sometimes place small data files on your computer. These are generically known as cookies (although may involve other file types such as HTML5 Cache). Almost every website you visit will be doing this to a certain level.</p>
                    <p>Cookies improve things by:</p>
                    <ul>
                        <li>Remembering settings, so you don't have to keep re-entering them whenever you visit a new page.</li>
                        <li>Remembering information you've given (eg your username) so you don't need to keep entering it.</li>
                        <li>Measuring how you use the website so we can make sure it meets your needs.</li>
                        <li>Store information that allows quicker retrieval of content, improving the speed of use.</li>
                    </ul>
                    <p>The cookies that we use do not identify you personally, they are present to make the site work better for you. You can manage/prevent these small files yourself if you wish. Details of how to do that are found here: <a href="http://www.aboutcookies.org/Default.aspx?page=1" target={'blank'} rel='noreferrer' >About Cookies</a>.</p>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default CookiesModal