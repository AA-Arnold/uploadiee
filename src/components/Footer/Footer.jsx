import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <span className='my-name'>Amasoh Arnold</span>
      <div className='a-tags'>
        <a
          href='https://aaatechie.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-globe fa-2x icon' />
        </a>

        <a
          href='mailto:amasoharnold@gmailmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-envelope fa-2x icon' />
        </a>

        <a
          href='https://www.linkedin.com/in/amasoh-arnold/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-linkedin fa-2x icon' />
        </a>

        <a
          href='https://github.com/AA-Arnold'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-github fa-2x icon' />
        </a>
      </div>
    </div>
  );
};

export default Footer;