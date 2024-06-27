import React from 'react';
import { Typography } from '@mui/material';
import './components.css';

const LogoFont = (props) => {
  return (
    <Typography
      sx={{
        fontFamily: 'LogoFont, sans-serif',
        color: props.fontColor,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        margin: props.fontMargin,
        letterSpacing: '3px',
        textAlign: props.fontAlign,
        transition: 'color 0.3s ease',
        zIndex: 9,
      }}
      className={props.text == '|' && 'cursorBlink'}
    >
      {props.text}
    </Typography>
  );
};

export default LogoFont;
