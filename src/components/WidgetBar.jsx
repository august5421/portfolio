import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fade, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { GitHub, LinkedIn, Mail, Description } from '@mui/icons-material';
import resumePrintable from '../assets/pdfs/Resume.pdf';
import IconButton from '@mui/material/IconButton';
import ObfuscatedEmail from './ObfuscateEmail';

const WidgetBar = () => {
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const activeView = useSelector((state) => state.activeView);

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const obfuscateEmail = (email) => {
    const obfuscated = email.replace(/[a-zA-Z]/g, (c) => {
      return Math.random() > 0.5 ? c : `&#${c.charCodeAt(0)};`;
    });
    return `<a href="mailto:${obfuscated}">${obfuscated}</a>`;
  };

  const handleGithubClick = () => {
    window.open('https://github.com/august5421?tab=repositories', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/augustbrown/', '_blank');
  };

  const handleMailClick = () => {
    const obfuscatedEmail = obfuscateEmail('augustashtonbrown@gmail.com');
    alert(`Click OK to copy the obfuscated email: ${obfuscatedEmail}`);
  };

  const handleResumeClick = () => {
    var a = document.createElement('A');
    a.href = resumePrintable;
    a.download = resumePrintable.substr(resumePrintable.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const actions = [
    { icon: <Description />, name: 'Resume', action: handleResumeClick },
    { icon: <GitHub />, name: 'GitHub', action: handleGithubClick },
    { icon: <LinkedIn />, name: 'LinkedIn', action: handleLinkedInClick },
    { icon: <IconButton ><ObfuscatedEmail mode="speedDial" encodedEmail='&#097;&#117;&#103;&#117;&#115;&#116;&#097;&#115;&#104;&#116;&#111;&#110;&#098;&#114;&#111;&#119;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;' /></IconButton >, name: 'Gmail'},
  ];

  return (
    <Fade in={activeView !== null} timeout={750}>
        <SpeedDial
        ariaLabel="WidgetBar"
        style={{
            position: 'fixed',
            top: isMobile && '15px',
            right: isMobile ? '15px' : '35px',
            bottom: !isMobile && '40px'
        }}
        icon={<SpeedDialIcon icon={<SpeedDialIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={isMobile ? "down" : 'up'}
        >
        {actions.map((action) => (
            action.name === 'Gmail' ? (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ) : (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.action}
              />
            )
            
        ))}
        </SpeedDial>
    </Fade>
  );
};

export default WidgetBar;
