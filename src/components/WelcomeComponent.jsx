import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useSelector } from 'react-redux';
import LogoFont from './LogoFont';
import useTypewriter from './useTypewriter';
import { Tooltip } from '@mui/material';

const WelcomeComponent = (props) => {
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const skillsets = [
    'I Write PHP Scripts',
    'I Execute SQL Queries',
    'I Build React Components',
    'I Develop API Endpoints',
    'I Design Database Schemas',
    'I Optimize JavaScript Code',
    'I Create CSS Animations',
    'I Implement Auth Systems',
    'I Integrate Third-Party APIs',
    'I Test Software for Bugs',
    'I Deploy Applications',
    'I Maintain Version Control',
    'I Debug Code Issues',
    'I Configure Web Servers',
    'I Ensure Compatibility',
  ];

  const typedSkillset = useTypewriter(skillsets, 100, 50, 2000);

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

  const handleResumeClick = () => {
    var file_path = '../assets/pdfs/resume.pdf';
    var a = document.createElement('A');
    a.href = file_path;
    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleMailClick = () => {
    const obfuscatedEmail = obfuscateEmail('augustashtonbrown@gmail.com');
    alert(`Click OK to copy the obfuscated email: ${obfuscatedEmail}`);
  };

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
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '20px' : '100px'
      }}
    >
      <Box style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: isMobile && 'center', justifyContent: 'center'}}>
        <LogoFont fontColor={theme.black} text="Hi There! My Name's" fontAlign={isMobile && 'center'} fontWeight='700' />
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <LogoFont text="August&nbsp;" fontColor={theme.secondary} fontWeight='700' fontSize={isMobile ? '25px' : '60px'} />
          <LogoFont text="Brown" fontColor={theme.black} fontWeight='700' fontSize={isMobile ? '25px' : '60px'} />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
          <LogoFont text={typedSkillset} fontColor={theme.black} fontWeight='700' fontSize={isMobile ? '20px' : '40px'} offsetColor={theme.secondary} />
          <LogoFont text="|" fontColor={theme.secondary} fontWeight='700' fontSize={isMobile ? '20px' : '40px'} offsetColor={theme.secondary} />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row'}}>
          <Tooltip title="GitHub">
            <IconButton onClick={handleGithubClick} >
                <GitHubIcon fontSize="large" style={{color: theme.secondary}} />
            </IconButton >
          </Tooltip>
          <Tooltip title="Email">
            <IconButton  onClick={handleMailClick} >
                <EmailIcon fontSize="large" style={{color: theme.secondary}} />
            </IconButton >
          
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton  onClick={handleLinkedInClick} >
                <LinkedInIcon fontSize="large" style={{color: theme.secondary}} />
            </IconButton >
          </Tooltip>
          <Tooltip title="Resume">
            <IconButton  onClick={handleResumeClick} >
                <DescriptionIcon fontSize="large" style={{color: theme.secondary}} />
            </IconButton >
          </Tooltip>
        </Box>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: isMobile && 'center', justifyContent: 'center'}}>
        pisrjmnfg
      </Box>
    </Box>
  );
};

export default WelcomeComponent;
