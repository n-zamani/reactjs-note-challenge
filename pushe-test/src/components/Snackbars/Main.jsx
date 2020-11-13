import { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Main = (props) => {
  const { successMessage, errorMessage } = props;

  const [snackbar, setSnackbar] = useState({
    successSnackbar: false,
    errorSnackbar: false,
  });

  useEffect(() => {
    if (successMessage) { //when a request finishes successfully
      setSnackbar({
        ...snackbar,
        successSnackbar: true,
      });
    }

    if (errorMessage) { //when a request finishes with error
      setSnackbar({
        ...snackbar,
        errorSnackbar: true,
      });
    }
  }, [successMessage, errorMessage]);

  const handleSnackbarClose = () => {
    setSnackbar({
      errorSnackbar: false,
      successSnackbar: false,
    });
  };

  return (
    <Snackbar
      open={snackbar.successSnackbar || snackbar.errorSnackbar}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      {/* based on the type of message we get, we render different snackbars */}
      {snackbar.successSnackbar ? (
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
          {successMessage}
        </MuiAlert>
      ) : snackbar.errorSnackbar ? (
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
          {errorMessage}
        </MuiAlert>
      ) : (
        ''
      )}
    </Snackbar>
  );
};

export { Main as Snackbars };
