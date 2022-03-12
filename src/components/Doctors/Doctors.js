import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './Doctors.css'

function Doctors() {
  return (
    <div>
        <Container className='doctor-container'>
        <h2 className="text-center mt-3 mb-5">OUR <span style={{color:'#f66840'}}> &nbsp;DOCTORS</span></h2>
            <Row>
                <Col ms={6} className='doctors-card-wraper'>
                <Card >
                    
                    <Card.Body>
                        <Card.Title>Dr. SWATI GUPTA</Card.Title>
                        <Card.Text>B.D.S (Gold Medalist), M.D.S</Card.Text>
                        <Card.Text>PROSTHODONTICS</Card.Text>
                        <p>KING GEOGES' MEDICAL COLLEGE, LUCKNOW</p>
                        <p>SPECIALIST IN CROWN, BRIDGE & DENTURE</p>
                        <p>Ex.SENIOR RESIDENT(K.G.M.C)</p>
                        <p>PROFESSOR & SENIOR CONSULTANT</p>
                        <p>B.B.D COLLEGE OF DENTAL SCIENCE</p>
                    </Card.Body>
                    </Card>
                </Col>
                <Col ms={6} className='doctors-card-wraper'>
                <Card >
                    <Card.Img variant="top" src="images/homebg1.jpg" />
                    <Card.Body>
                        <Card.Title>Dr. HEMANT GUPTA</Card.Title>
                        <Card.Text>ORAL & MAXILLOFACIAL SURGERY</Card.Text>
                        <p>KING GEOGES' MEDICAL COLLEGE, LUCKNOW</p>
                        <p>SPECIALIST INPLANTS & SURGRIES OF FACE & JAW</p>
                        <p>Ex.XONSULTANT, VIVEKANAND POLYCKINIC</p>
                        <p>PROFESSOR & SENIOR CONSULTANT</p>
                        <p>B.B.D COLLEGE OF DENTAL SCIENCE</p>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Doctors