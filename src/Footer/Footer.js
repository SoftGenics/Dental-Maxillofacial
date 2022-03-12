import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div className='footer-container-bg'>
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our The Dental & maxillofacial newsletter 
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--primary'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/Photo-gallerys'>Photo Gallery</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Our services</h2>
            <Link to='/'>General Denstistry</Link>
            <Link to='/'>Cosmetics</Link>
            <Link to='/'>Surgical</Link>
            <Link to='/'>Kids Denstistry</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/OurVideos'>Clinic Video</Link>
            <Link to='/OurVideos'>Lab Video</Link>
            <Link to='/OurVideos'>Hospital video</Link>
            <Link to='/OurVideos'>Surgical</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact us</h2>
            <Link to='/'><i className="fas fa-phone"/>&nbsp;0522-409731</Link>
            <Link to='/'><i className="fas fa-envelope" />&nbsp;care@maxillofacial.com</Link>
            <Link to='/'><i className="fas fa-map-marked-alt"/>&nbsp;1/705, Bypass Road,<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vishal Khand,<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gomti Nagar,<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lucknow-226010</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <i className="fas fa-tooth" />&nbsp;THE DENTAL & MAXILLOFACIAL CLINIC
            </Link>
          </div>
          
          <small className='website-rights'><a href="https://www.softgenics.in"style={{textDecoration:'none'}}>SoftGenic@gmail.com©2022</a></small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
        
      </section>
    </div>
  </div>
  );
}

export default Footer;
