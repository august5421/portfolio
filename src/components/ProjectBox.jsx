import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography, Divider, Modal, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LogoFont from './LogoFont';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectBox = (props) => {
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const getFirstSentence = (text) => {
    const periodIndex = text.indexOf('.');
    return periodIndex !== -1 ? text.substring(0, periodIndex + 1) : text;
  };

  const parseDescription = (description) => {
    return description.split('\n').map((paragraph, index) => (
      <Typography key={index} variant="body1" paragraph>
        {paragraph}
      </Typography>
    ));
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: isMobile ? '425px' : '500px',
        margin: isMobile ? '0px 0px 15px 0px' : '15px',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '350px',
        minWidth: '300px',
        backgroundColor: '#fff'
      }}
    >
      {props.image && (
        <Box
          style={{
            width: '100%',
            height: '150px',
            overflow: 'hidden',
            borderRadius: '8px',
            marginBottom: '10px'
          }}
        >
          <img
            src={props.image}
            alt={`${props.name} project banner`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
        </Box>
      )}
      <Divider />
      <Box flexGrow={1} paddingX="20px" paddingTop="20px" position="relative">
        <LogoFont fontSize="20px" text={props.name} fontColor={theme.secondary}/>
        {props.company && (
          <Typography variant="body1">
            <strong>Company:</strong> {props.company}
          </Typography>
        )}
        <Typography variant="body1">
          <strong>Start Date:</strong> {props.startDate}
        </Typography>
        <Typography variant="body1">
          <strong>End Date:</strong> {props.endDate}
        </Typography>
        <Typography variant="body1">
          <strong>Technologies Used:</strong> {props.technologiesUsed.join(', ')}
        </Typography>
        {!isMobile && (<Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
          {getFirstSentence(props.description)}
        </Typography>)}
        <Box style={{position: 'absolute', left: 0, right: 0, bottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          {props.link && (
            <Button
              variant="contained"
              color="primary"
              component="a"
              href={props.link}
              target="_blank"
              sx={{ marginRight: '10px', backgroundColor: theme.secondary }}
            >
              View Project
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{ backgroundColor: theme.secondary }}
          >
            More Details
          </Button>
        </Box>
      </Box>
      
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        style={{
          width: isMobile ? '100%' : 'calc(100vw - 110px)',
          position: 'absolute',
          left: isMobile ? '0px' : '110px',
          top: '-50px',
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
            padding: isMobile ? '10px' : '30px'
          }}
        >
          <Box style={{ display: 'flex', flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
            {props.image && (
              <Box
                style={{
                  width: '100%',
                  height: isMobile ? 'auto' : '300px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: '20px'
                }}
              >
                <img
                  src={props.image}
                  alt={`${props.name} project banner`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: isMobile ? 'contain' : 'cover',
                    objectPosition: 'top left'
                  }}
                />
              </Box>
            )}
            <Box style={{display:' flex', justifyContent: 'center'}}>
                {isMobile && (<Typography id="project-modal-title" variant="h6" component="h2">
                    <LogoFont fontWeight={700} fontSize="20px" text={props.name} fontColor={theme.secondary} />
                </Typography>)}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: isMobile && '100%'}}>
                {!isMobile && (<Typography id="project-modal-title" variant="h6" component="h2">
                    <LogoFont fontWeight={700} fontSize="20px" text={props.name} fontColor={theme.secondary}/>
                </Typography>)}
                <Box>
                {props.link && (
                    <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href={props.link}
                    target="_blank"
                    sx={{ marginRight: '10px', backgroundColor: theme.secondary }}
                    >
                    View Project
                    </Button>
                )}
                {props.githubLink && (
                    <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href={props.githubLink}
                    target="_blank"
                    sx={{ marginRight: '10px', backgroundColor: theme.secondary }}
                    >
                        <GitHubIcon style={{color: theme.white, marginRight: '15px'}} />
                        {!isMobile && <>GitHub</>} Link
                    </Button>
                )}
                </Box>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box id="project-modal-description">
            
            {parseDescription(props.description)}
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default ProjectBox;
