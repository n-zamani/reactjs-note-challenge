import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotesActions } from '../../_actions';
import { Cards } from "./Cards";
import { ListWrapper } from './style';
import CircularProgress from '@material-ui/core/CircularProgress';

const List = (props) => {
  const { gettingNotes, notesList, notesError, deleteNoteMessage, dispatch } = props;

  useEffect(() => {
    dispatch(NotesActions.getNotes());
  }, []);

  useEffect(() => {
    if (deleteNoteMessage) { //after deleting a note, we have to get notes again to update the list
      dispatch(NotesActions.getNotes());
    }
  }, [deleteNoteMessage]);

  return (
    <>
      {gettingNotes ? (
        <ListWrapper>
          {/* a loader for when we're getting notes */}
          <CircularProgress color="inherit" />
        </ListWrapper>
      ) : !gettingNotes && !notesError && !notesList.length ? (
        <ListWrapper>
          {/* after getting notes with no error, if user didn't have any notes */}
          You don't have any notes!
        </ListWrapper>
      ) : notesError ? (
        <ListWrapper>
          {/* if there was an error in getting notes */}
          Error: {notesError}
        </ListWrapper>
      ) : !notesError && notesList.length ? (
        <ListWrapper>
          {/* after getting notes with no error, and user has notes */}
          {notesList.map((note) => (
            <Cards key={note._id} note={note} />
          ))}
        </ListWrapper>
      ) : (
        ''
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    gettingNotes: state.notes.gettingNotes,
    notesList: state.notes.notesList,
    notesError: state.notes.notesError,
    deleteNoteMessage: state.notes.deleteNoteMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(NotesActions, dispatch),
  };
};

const connectedList = connect(mapStateToProps, mapDispatchToProps)(List);

export { connectedList as List };
