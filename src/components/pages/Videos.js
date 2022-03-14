import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
function Videos() {
  return (
    <div>
      <Container style={{marginTop:'15rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <h2 className='mt-3 mb-3 text-center'><strong>CLINIC VIDEOS</strong></h2>
      <Player
      playsInline
      poster="images/homebg.jpg"
      src="videos/videos-3.mp4"
    />
    <Row>
      <Col md={3} style={{padding:'10px'}}>
      <Player
      playsInline

      src="videos/1.mp4"
    />
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Player
      playsInline

      src="videos/2.mp4"
    />
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Player
      playsInline

      src="videos/3.mp4"
    />
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Player
      playsInline

      src="videos/4.mp4"
    />
      </Col>
    </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Videos