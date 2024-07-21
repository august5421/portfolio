import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Modal, Checkbox, FormControlLabel, Button, Snackbar, Tooltip } from '@mui/material';
import { Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ObfuscatedEmail = (props) => {
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const [modalOpen, setModalOpen] = useState(false);
  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const decodeEmail = (x) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = x;
    return textarea.value;
  };

  const handleCheckboxChange = (event) => {
    setCaptchaCompleted(event.target.checked);
  };

  const handleCopyEmail = () => {
    const decodedEmail = decodeEmail(props.encodedEmail);
    navigator.clipboard.writeText(decodedEmail);
    setSnackbarOpen(true);
    setModalOpen(false);
    setTimeout(() => {
      setCaptchaCompleted(false)
    }, 250)
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      {props.encodedEmail === null ? (
        <Tooltip title="Email contact not preferred">
          <Box sx={{ cursor: 'not-allowed' }}>
            <span>
              <Button disabled>
                <EmailIcon sx={{ color: theme.grey }} fontSize="large" />
              </Button>
            </span>
          </Box>
        </Tooltip>
      ) : (
        <Tooltip title="Copy Email Address">
          <Button onClick={() => setModalOpen(true)}>
            <EmailIcon
              fontSize={props.mode !== 'speedDial' ? 'large' : 'medium'}
              style={{ cursor: 'pointer' }}
              sx={{ color: props.mode !== 'speedDial' ? theme.secondary : '#565656' }}
            />
          </Button>
        </Tooltip>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            minWidth: '300px',
          }}
        >
          <FormControlLabel
            control={<Checkbox checked={captchaCompleted} onChange={handleCheckboxChange} />}
            label="I'm not a robot"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCopyEmail}
            disabled={!captchaCompleted}
            sx={{ backgroundColor: theme.secondary }}
          >
            Copy Email
          </Button>
        </div>
      </Modal>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Email address copied!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ObfuscatedEmail;
