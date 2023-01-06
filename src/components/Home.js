import React from 'react';
import { Button } from './Button';
import './Home.css';

export default function Home() {
  return (
    <>
        <div className='cards'>
          <h1>Welcome</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
              
              </ul>
          <ul className='cards__items'>
           </ul>
           <ul className='cards__items'>
          
           </ul>
          <div className='hero-btns'>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </div>
        </div>
      </div>
    </div>
      </>
    );
  }
  
