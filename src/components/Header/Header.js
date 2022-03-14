import React from 'react';
import {Modal, Navbar, Nav, Form, Button, Container} from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import './Header.css'
function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Patient Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className=' btn btn-danger' type="submit" size="lg">
    Login
  </Button>
</Form>
      </Modal.Body>

    </Modal>
  );
}
const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return <div>
  <Navbar  variant="light" fixed='top' className='top-nav mb-3'>
   <Container fluid>
   <Nav className="me-auto">
   <Marquee className='marque-text' gradient={false}><Navbar.Brand as={Link} to="/Notification"><img src='images/event.gif' alt="offerlogo" /><span className='offer-text'>Check Offers click here</span></Navbar.Brand></Marquee>
    </Nav>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
      <Nav.Link href="tel:+919380359418"><i className="fas fa-phone-alt" />+91 9380359418</Nav.Link>
      <Nav.Link onClick={() => setModalShow(true)}><i className="fas fa-sign-in-alt" />&nbsp;&nbsp;Patient Login</Nav.Link>
      <Nav.Link href="#pricing">PayBill</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <LoginModal 
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
  </div>;
};
export default Header;
