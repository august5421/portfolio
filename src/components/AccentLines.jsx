import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';

const AccentLines = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const activeView = useSelector((state) => state.activeView);

  const mobileStyles = `
    @keyframes extendWidth {
      from { width: 0; }
      to { width: 40%; }
    }
    @keyframes extendHeight {
      from { height: 0; }
      to { height: 25%; }
    }
    @keyframes shrinkWidth {
      from { width: 40%; }
      to { width: 0; }
    }
    @keyframes shrinkHeight {
      from { height: 25%; }
      to { height: 0; }
    }
  `;

  const desktopStyles = `
    @keyframes extendWidth {
      from { width: 0; }
      to { width: 25%; }
    }
    @keyframes extendHeight {
      from { height: 0; }
      to { height: 45%; }
    }
    @keyframes shrinkWidth {
      from { width: 25%; }
      to { width: 0; }
    }
    @keyframes shrinkHeight {
      from { height: 45%; }
      to { height: 0; }
    }
  `;

  const animationStyle = isMobile ? mobileStyles : desktopStyles;

  return (
    <Box style={{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      position: 'absolute',
      left: isMobile ? 0 : '110px',
      top: 0,
      bottom: isMobile ? '75px' : 0,
      right: 0,
      zIndex: 3,
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div style={{
          position: 'absolute',
          top: isMobile ? 15 : 25,
          left: isMobile ? 15 : 25,
          height: '5px',
          width: '0',
          backgroundColor: theme.primaryColor || 'black',
          animation: activeView !== null ? 'extendWidth 0.5s forwards' : 'shrinkWidth 0.5s forwards'
        }}></div>

        <div style={{
          position: 'absolute',
          top: isMobile ? 15 : 25,
          left: isMobile ? 15 : 25,
          width: '5px',
          height: '0',
          backgroundColor: theme.primaryColor || 'black',
          animation: activeView !== null ? 'extendHeight 0.5s forwards' : 'shrinkHeight 0.5s forwards'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: isMobile ? 15 : 25,
          right: isMobile ? 15 : 25,
          height: '5px',
          width: '0',
          backgroundColor: theme.primaryColor || 'black',
          animation: activeView !== null ? 'extendWidth 0.5s forwards' : 'shrinkWidth 0.5s forwards'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: isMobile ? 15 : 25,
          right: isMobile ? 15 : 25,
          width: '5px',
          height: '0',
          backgroundColor: theme.primaryColor || 'black',
          animation: activeView !== null ? 'extendHeight 0.5s forwards' : 'shrinkHeight 0.5s forwards'
        }}></div>
      </div>

      <style>
        {animationStyle}
      </style>
    </Box>
  );
};

export default AccentLines;
