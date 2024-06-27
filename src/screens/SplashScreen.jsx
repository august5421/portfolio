import { useEffect } from 'react';
import { Box, Button, Fade } from '@mui/material';
import LogoFont from '../components/LogoFont';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/images/logo.png';
import { updateSplashScreenFader, setSplashScreenPositionModifier, setActiveView } from '../actions/actions';

function SplashScreen() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const splashScreenFader = useSelector((state) => state.splashScreenFader);

  useEffect(() => {
    setTimeout(() => dispatch(updateSplashScreenFader('image', true)), 500);
    setTimeout(() => dispatch(updateSplashScreenFader('name', true)), 750);
    setTimeout(() => dispatch(updateSplashScreenFader('button', true)), 1000);
  }, []);

  const handleEnter = () => {
    setTimeout(() => dispatch(updateSplashScreenFader('button', false)), 250);
    setTimeout(() => dispatch(updateSplashScreenFader('name', false)), 500);
    setTimeout(() => dispatch(updateSplashScreenFader('image', false)), 750);
    if (isMobile) {
        setTimeout(() => dispatch(setSplashScreenPositionModifier('-100vh')), 1000);
    } else {
        setTimeout(() => dispatch(setSplashScreenPositionModifier('-100vw')), 1000);
    }
    setTimeout(() => dispatch(setActiveView('welcome')), 3000);
  }

  return (
    <Box
      style={{
        display: 'flex',
        width:  '100vw',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(6,29,38,1) 100%)',
        zIndex: 3,
      }}
    >
      <Fade in={splashScreenFader.image} timeout={750}>
        <img src={logo} alt="Logo" />
      </Fade>
      <Fade in={splashScreenFader.name} timeout={750}>
        <div>
          <LogoFont
            text='August Ashton Brown'
            fontColor={theme.white}
            fontWeight={700}
            fontSize="20px"
            fontAlign='center'
            fontMargin='20px 0px 0px 0px'
          />
        </div>
      </Fade>
      <Fade in={splashScreenFader.button} timeout={750}>
        <Button variant="outlined" style={{ marginTop: '20px' }} onClick={handleEnter}>
          Enter
        </Button>
      </Fade>
    </Box>
  );
}

export default SplashScreen;
