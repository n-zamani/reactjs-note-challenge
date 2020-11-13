import { connect } from 'react-redux';
import { NotesListWrapper } from './style';
import { List } from './List';
import { Snackbars } from '../../components';

const Main = (props) => {
  const { deleteNoteMessage, deleteNoteError } = props;

  return (
    <NotesListWrapper>
      <h2>Notes List</h2>
      <List />
      {/* Snackbars for showing success and error in deleting notes */}
      <Snackbars successMessage={deleteNoteMessage} errorMessage={deleteNoteError} />
    </NotesListWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    deleteNoteMessage: state.notes.deleteNoteMessage,
    deleteNoteError: state.notes.deleteNoteError,
  };
};

const connectedNotesList = connect(mapStateToProps)(Main);

export { connectedNotesList as NotesList };
