
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../images/Icon.png';
import uploadIcon from '../../images/uploadIcon.png';
import Image from '../../images/image.png';
import garbage from '../../images/garbage.png'
import './AnimatedNavbar.scss';
import Footer from '../Footer/Footer';



const AnimatedNavbar = () => {
    return (
      <Fragment>
        <nav className='navbar'>
          <ul className='navbar-nav'>
            <li className='logo'>
              <Link to='/' className=' logo-link'>
                <div className='logo-image'>
                  <img
                    src={Icon}
                    alt=''
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className='link-text logo-text'>Uploadiee</span>
              </Link>
            </li>
  
            <li className='nav-item'>
              <Link to='/models' className='nav-link'>
                <div className='item-image'>
                  <img
                    src={uploadIcon}
                    alt=''
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className='link-text'>Upload Here</span>
              </Link>
            </li>
  
            <li className='nav-item'>
              <Link to='/models' className='nav-link'>
                <div className='item-image'>
                  <img
                    src={Image}
                    alt=''
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className='link-text'>View Galary</span>
              </Link>
            </li>
  
            <li className='nav-item'>
              <Link to='/models' className='nav-link'>
                <div className='item-image'>
                  <img
                    src={garbage}
                    alt=''
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className='link-text'>Delete Image</span>
              </Link>
            </li>
  
            <li className='nav-item'>
              <div className='nav-link'>
                <div className='item-image'>
                  <i className='fa fa-address-card-o icon' aria-hidden='true' />
                </div>
                <div className='link-text'>
                  <Footer />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  };
  
  export default AnimatedNavbar;