import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import './products/products-style.css';


function Footer(props) {
  return (
    <AppBar position="static" color="default" >
      <section className='footerBar'>
        <div>
          <p>Copyright@Habrawi 2020</p>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li>Phone: 0799000000</li>
            <li>Email: AhmadMamdouh@gmail.com</li>
          </ul>
        </div>
      </section>
    </AppBar>
  );
}

export default Footer;