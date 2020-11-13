import { NotesConstats } from '../_constants';
import { NotesServices } from '../_services';

const createNote = (title, content) => {
  return (dispatch) => {
    dispatch(request());

    NotesServices.createNote(title, content).then(
      (response) => {
        dispatch(success('Note Created Successfully!'));
      },
      async (error) => {
        dispatch(fail(await error));
      }
    );
  };

  function request() {
    return {
      type: NotesConstats.CREATE_NOTE_REQUEST,
    };
  }

  function success(createNoteMessage) {
    return {
      type: NotesConstats.CREATE_NOTE_SUCCESS,
      createNoteMessage,
    };
  }

  function fail(createNoteError) {
    return {
      type: NotesConstats.CREATE_NOTE_ERROR,
      createNoteError,
    };
  }
};

const getNotes = () => {
  return (dispatch) => {
    dispatch(request());

    NotesServices.getNotes().then(
      (response) => {
        dispatch(success(response));
      },
      async (error) => {
        dispatch(fail(await error));
      }
    );
  };

  function request() {
    return {
      type: NotesConstats.GET_NOTES_REQUEST,
    };
  }

  function success(notesList) {
    return {
      type: NotesConstats.GET_NOTES_SUCCESS,
      notesList,
    };
  }

  function fail(notesError) {
    return {
      type: NotesConstats.GET_NOTES_ERROR,
      notesError,
    };
  }
};

const deleteNote = (id) => {
  return (dispatch) => {
    dispatch(request());

    NotesServices.deleteNote(id).then(
      (response) => {
        dispatch(success('Note Removed Successfully!'));
      },
      async (error) => {
        dispatch(fail(await error));
      }
    );
  };

  function request() {
    return {
      type: NotesConstats.DELETE_NOTE_REQUEST,
    };
  }

  function success(deleteNoteMessage) {
    return {
      type: NotesConstats.DELETE_NOTE_SUCCESS,
      deleteNoteMessage,
    };
  }

  function fail(deleteNoteError) {
    return {
      type: NotesConstats.DELETE_NOTE_ERROR,
      deleteNoteError,
    };
  }
};

export const NotesActions = {
  createNote,
  getNotes,
  deleteNote,
};
