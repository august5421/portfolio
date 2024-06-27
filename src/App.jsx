import { useEffect } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Fade } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from './screens/SplashScreen';
import DashScreen from './screens/DashScreen';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const splashScreenPositionModifier = useSelector((state) => state.splashScreenPositionModifier);

  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: isMobile ? 'column-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: isMobile ? splashScreenPositionModifier : 0,
        left: isMobile ? 0 : splashScreenPositionModifier,
        width: isMobile ? '100vw' : '200vw',
        height: isMobile ? '200vh' : '100vh',
        backgroundColor: theme.white,
        transition: 'bottom 0.5s ease-in-out, left 0.5s ease-in-out',
        zIndex: 1,
      }}
    >
      <SplashScreen />
      <DashScreen />
    </Box>
  );
}

export default App;
