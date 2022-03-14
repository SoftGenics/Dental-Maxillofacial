import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './OfficeInfo.css'

function OfficeInfo() {
  return (
    <div>
        <Container fluid style={{backgroundColor:'#f6feff', padding:'4rem'}}>
            <Row>
                 <Col md={6}>
                     <Container >
                        <h2>OFFICE INFORMATION</h2>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-phone-alt"></i>&nbsp;Phone:&nbsp;<a href='tel:+919380359418'style={{color:'rgb(243, 40, 13)', textDecoration:'none'}} >0522-4049731</a><br></br>
                        </div>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-clock"></i>&nbsp;&nbsp;TIMINGS:
                        </div>
                        <div className=' mt-3 mb-5 office-info-section'>
                        <p>Morning: 10 A.M,- 2 P.M&nbsp; (By Appintments only)</p>
                        <p>Evening: 5 P.M. - 9 P.PM.&nbsp;</p>
                        <p>Every Sunday:&nbsp;10 A.M. -  5 P.M.</p>
                        </div>
                        <h5>Follow us!</h5>
                        <div className='px-2 mt-3 mb-3 follow-icon'>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-facebook"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-instagram-square"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-youtube"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-google-plus"></i></Link>
                        </div>
 
                     </Container>
                </Col>
                <Col md={6}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14238.807787087584!2d80.9878198!3d26.8494307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cc30e64dc823e04!2sThe%20Dental%20%26%20Maxillofacial%20Clinic!5e0!3m2!1sen!2sin!4v1647133165511!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OfficeInfo