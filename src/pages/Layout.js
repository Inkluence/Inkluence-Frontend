import { Typography } from '@mui/material';
import { Box, Grid, Card } from '@mui/material';
import { calcLength } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../../src/assets/img/ink_logo.png';
import Header from './Header';
import NavCard from '../components/layout/NavCard';

const Layout = () => {
  return (
    <div style={{ backgroundColor: '#000', width: '100%', height: 'calc(100vh)' }}>
      <Header />
      <Box
        container
        display="flex"
        justifyContent={'center'}
        sx={{ height: '10%', pt: 20, pb: 30 }}
      >
        <img src={Logo} width="258px" height="119px" alt="" />
      </Box>
      <Box container>
        <Grid
          container
          display="flex"
          justifyContent={'center'}
          lineHeight={'calc(45vh)'}
          spacing={20}
        >
          <Grid item xs={3}>
            <NavCard type={'YOUTUBE'} />
          </Grid>
          <Grid item xs={3}>
            <NavCard type={'INSTA'} />
          </Grid>
          <Grid item xs={3}>
            <NavCard type={'MODEL'} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
