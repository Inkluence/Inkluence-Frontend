import { Typography } from '@mui/material';
import { Box, Grid, Card } from '@mui/material';
import { calcLength } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div style={{ backgroundColor: '#1E1E1E', width: '100%', height: 'calc(100vh)' }}>
      <Header />
      <Box
        container
        display="flex"
        justifyContent={'center'}
        sx={{ height: '10%', pt: 20, pb: 20 }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{ flexGrow: 1, color: 'white', textAlign: 'center' }}
        >
          Ink
        </Typography>
      </Box>
      <Box container sx={{ height: '50%' }}>
        <Grid
          container
          display="flex"
          justifyContent={'center'}
          lineHeight={'calc(45vh)'}
          spacing={20}
        >
          <Grid item xs={2}>
            <Box container display="flex" justifyContent={'center'}>
              <Link to="/youtube">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}
                >
                  Youtube
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box container display="flex" justifyContent={'center'}>
              <Link to="/instagram">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}
                >
                  Instagram
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box container display="flex" justifyContent={'center'}>
              <Link to="/model">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}
                >
                  Model
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
