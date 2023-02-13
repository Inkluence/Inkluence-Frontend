import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Nav, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo_white.png';
import { useEffect } from 'react';
export default function Header() {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <Nav
      id="navbar-youtube"
      className="navbar navbar-expand-lg navbar-dark justify-content-between"
    >
      <a className="navbar-brand" href="/">
        <img src={Logo} width="30" height="30" alt="" />
      </a>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </Nav>
  );
}

{
  /* <Box position={'static'} sx={{ width: '100%', flexGrow: 1, backgroundColor: '#1E1E1E' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ color: '#FFFFF', ml: 7 }}
        onClick={onClickLogo}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Ink
        </Typography>
      </IconButton>
    </Box> */
}
