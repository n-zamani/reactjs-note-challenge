import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotesActions } from '../../_actions';
import { InputsWrapper, useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const Inputs = (props) => {
  const { creatingNote, createNoteMessage, dispatch, open, close } = props;

  const classes = useStyles();

  const [state, setState] = useState({
    title: '',
    note: '',
  });

  const [error, setError] = useState({
    titleError: false,
    noteError: false,
  });

  useEffect(() => {
    if (createNoteMessage) { //when creating a note is successful, Inputs component must be closed, reset the form and update notes list
      close();
      dispatch(NotesActions.getNotes())
      hadleFormReset();
    }
  }, [createNoteMessage]);

  const handleInputChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const validateTitle = ({ target: { value } }) => {
    if (value.length >= 5) { //title's length should not be less than 5 characters
      setError({
        ...error,
        titleError: false,
      });
    } else {
      setError({
        ...error,
        titleError: true,
      });
    }
  };

  const validateNote = ({ target: { value } }) => {
    if (value.trim()) { //content should not be empty or just be spaces
      setError({
        ...error,
        noteError: false,
      });
    } else {
      setError({
        ...error,
        noteError: true,
      });
    }
  };

  const hadleFormReset = () => {
    setState({
      title: '',
      note: '',
    });

    setError({
      titleError: false,
      noteError: false,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(NotesActions.createNote(state.title, state.note));
  };

  return (
    <Collapse in={open} className={classes.collapse}>
      <InputsWrapper>
        <Paper elevation={3} className={classes.paper}>
          <form
            className={classes.form}
            onReset={() => {
              close();
              hadleFormReset();
            }}
            onSubmit={handleFormSubmit}
          >
            <TextField
              variant="outlined"
              className={classes.textField}
              id="title"
              label="Title"
              name="title"
              value={state.title}
              onChange={(e) => {
                handleInputChange(e);
                validateTitle(e);
              }}
              error={error.titleError}
              helperText={error.titleError ? 'Title must contain 5 or more characters' : ''}
              required
            />
            <TextField
              variant="outlined"
              className={classes.textField}
              id="note"
              label="Note"
              name="note"
              multiline
              rows={4}
              value={state.note}
              onChange={(e) => {
                handleInputChange(e);
                validateNote(e);
              }}
              error={error.noteError}
              helperText={error.noteError ? 'Note must not be empty' : ''}
              required
            />

            <div>
              <Button variant="contained" color="secondary" className={classes.button} type="reset">
                Discard
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                disabled={error.noteError || error.titleError ? true : false}
              >
                {/* When a note is being created, a loader will replace 'Save' */}
                {creatingNote ? <CircularProgress color="inherit" size={30} /> : 'Save'}
              </Button>
            </div>
          </form>
        </Paper>
      </InputsWrapper>
    </Collapse>
  );
};

const mapStateToProps = (state) => {
  return {
    creatingNote: state.notes.creatingNote,
    createNoteMessage: state.notes.createNoteMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(NotesActions, dispatch),
  };
};

const connectedInputs = connect(mapStateToProps, mapDispatchToProps)(Inputs);

export { connectedInputs as Inputs };
