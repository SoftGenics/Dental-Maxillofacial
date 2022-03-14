import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        
      <span style={{color: 'white',textShadow: '5px -1px 2px rgba(0,0,0,0.9)'}}>
            <Typewriter 
            loop
            cursor
            cursorStyle="_"
            typeSpeed={20}
            deleteSpeed={50}
            words={['THE DENTAL' ,'MAXILLOFACIAL CLINIC']}
            />
            </span>
      <p>CENTER OF CENTERAL IMPLANTS </p>
      <div className='hero-btns'>
      <Link to='/Book_Online' ><Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOK NOW <i className="fas fa-sign-in-alt" />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
