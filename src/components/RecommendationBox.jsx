import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, Avatar, Divider, Tooltip, Modal, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ObfuscatedEmail from './ObfuscateEmail';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LogoFont from './LogoFont';

const RecommendationBox = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: theme.secondary,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: '300px',
        margin: isMobile ? '0px 0px 15px 0px' : '15px',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '350px',
        backgroundColor: '#fff'
      }}
    >
      <Box marginBottom="10px">
        <Avatar
          {...stringAvatar(props.name)}
          alt={`${props.name}'s avatar`}
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Divider />
      <Box flexGrow={1} paddingX="20px" paddingTop="20px">
        <Box display="flex" justifyContent="center">
          <Tooltip title="LinkedIn Profile">
            <Button href={props.linkedin} target="_blank">
              <LinkedInIcon sx={{color: theme.secondary}} fontSize="large" />
            </Button>
          </Tooltip>
          <ObfuscatedEmail encodedEmail={props.email} />
        </Box>
        <LogoFont fontSize="20px" text={props.name} fontColor={theme.secondary}/>
        <Typography variant="body1">
          <strong>Role:</strong> {props.role}
        </Typography>
        <Typography variant="body1">
          <strong>Company:</strong> {props.company}
        </Typography>
        <Typography variant="body1">
          <strong>Relationship:</strong> {props.relationship}
        </Typography>
        <Box marginTop="20px" display="flex" justifyContent="center">
        
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{ marginRight: '10px', backgroundColor: theme.secondary }}
          >
            Preview
          </Button>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={props.download}
            download
            sx={{ backgroundColor: theme.secondary }}
          >
            Download
          </Button>
        </Box>
      </Box>
      
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="preview-modal-title"
        aria-describedby="preview-modal-description"
        style={{
          width: isMobile ? '100vw' : 'calc(100vw - 110px)',
          position: 'absolute', 
          left: isMobile ? 0 : '110px',
          bottom: isMobile ? '75px' : 0,
        }}
      >
        <Paper 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '80%',
            overflowY: 'auto',
            padding: isMobile ? '15px' : '30px'
          }}
        >
          <Box style={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
            <Typography id="preview-modal-title" variant="h6" component="h2">
              {props.name + "'s Recommendation Letter"}
            </Typography>
            <IconButton 
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box id="preview-modal-description" dangerouslySetInnerHTML={{ __html: props.preview }} />
          <Box marginTop="20px" display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              component="a"
              href={props.download}
              download
              sx={{ backgroundColor: theme.secondary }}
            >
              Download
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default RecommendationBox;
