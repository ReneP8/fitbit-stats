import { AppBar, Button, Container, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import type { NextPage } from 'next';
import FitbitLoginButton from '../components/FitbitLoginButton';

const Home: NextPage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitbit Statistics
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <FitbitLoginButton />
      </Container>
    </div>
  )
}

export default Home;
