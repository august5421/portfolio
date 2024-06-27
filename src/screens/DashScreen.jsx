import { useEffect } from 'react';
import { Box, Button, Fade } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import WelcomeComponent from '../components/WelcomeComponent';
import WorkComponent from '../components/WorkComponent';
import RecommendationComponent from '../components/RecommendationComponent';
import AccentLines from '../components/AccentLines';
import WidgetBar from '../components/WidgetBar';

function DashScreen() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const activeView = useSelector((state) => state.activeView);

  return (
    <Box
      style={{
        display: 'flex',
        position: 'relative',
        width:  '100vw',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.white,
        zIndex: 2,
      }}
    >
      <Navbar />
      <AccentLines />
      {activeView !== 'welcome' && (
        <Fade timeout={750} in={activeView !== null && activeView !== 'welcome'}>
            <Box>
                <WidgetBar />
            </Box>
        </Fade>
       )}
        
            <Fade timeout={750} in={activeView !== null && activeView == 'welcome'}>
                <Box>
                    <WelcomeComponent />
                </Box>
            </Fade>
        
        
            <Fade timeout={750} in={activeView !== null && activeView == 'work'}>
                <Box>
                    <WorkComponent />
                </Box>
            </Fade>
        
            <Fade timeout={750} in={activeView !== null && activeView == 'recommend'}>
                <Box>
                    <RecommendationComponent />
                </Box>
            </Fade>
    </Box>
  );
}

export default DashScreen;
