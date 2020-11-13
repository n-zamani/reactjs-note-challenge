import { useState } from 'react';
import { connect } from 'react-redux';
import { TakeNoteWrapper, useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Inputs } from './Inputs';
import { Snackbars } from '../../components';

const Main = (props) => {
  const { createNoteMessage, createNoteError } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false); //the state for opening and closing Inputs

  return (
    <TakeNoteWrapper>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          Take a note...
        </Paper>
      </div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Create
      </Button>
      <Inputs open={open} close={() => setOpen(false)} />
      {/* Snackbars for showing success and error in creating notes */}
      <Snackbars successMessage={createNoteMessage} errorMessage={createNoteError} />
    </TakeNoteWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    createNoteMessage: state.notes.createNoteMessage,
    createNoteError: state.notes.createNoteError,
  };
};

const connectedTakeNote = connect(mapStateToProps)(Main);

export { connectedTakeNote as TakeNote };
