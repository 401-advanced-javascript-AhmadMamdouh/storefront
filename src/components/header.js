import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';


import './products/products-style.css';


function Header(props) {
  return (
    <AppBar position="static" 
    style={{ 
      textAlign:'center',
      backgroundColor:'rgb(88,120,141)',
      fontSize: '2em',
      justifyContent: 'center',
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      letterSpacing: '0.1vw',
      }}>
        <Toolbar 
           style={{ 
            display:'flex',
            justifyContent:'center'
            }}>
          <CssBaseline />
        Store Lab
        </Toolbar>
    </AppBar>
  );
}

export default Header;