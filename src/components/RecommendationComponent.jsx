import React from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';

const RecommendationComponent = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  
  return (
    <Box 
      style={{
        position: 'absolute',
        left: isMobile ? 0 : '110px',
        top: 0,
        bottom: isMobile ? '75px' : 0,
        right: 0,
        zIndex: 3,
        margin: isMobile ? 20 : 30,
        padding: '5px',
        overflow: 'scroll' 
      }}
    >
      RecommendationComponent
    </Box>
  );
};

export default RecommendationComponent;
