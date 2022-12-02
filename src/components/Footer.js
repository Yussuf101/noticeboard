import React from 'react';
import './Footer.css';
import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;