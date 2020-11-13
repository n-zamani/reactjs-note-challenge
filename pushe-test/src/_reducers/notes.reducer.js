import { NotesConstats } from '../_constants';

const initialState = {
  creatingNote: false,
  createNoteMessage: null,
  createNoteError: null,
  gettingNotes: false,
  notesList: [],
  notesError: null,
  deletingNote: false,
  deleteNoteMessage: null,
  deleteNoteError: null,
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case NotesConstats.CREATE_NOTE_REQUEST:
      return {
        ...state,
        creatingNote: true,
        createNoteMessage: null,
        createNoteError: null,
      };

    case NotesConstats.CREATE_NOTE_SUCCESS:
      return {
        ...state,
        creatingNote: false,
        createNoteMessage: action.createNoteMessage,
      };

    case NotesConstats.CREATE_NOTE_ERROR:
      return {
        ...state,
        creatingNote: false,
        createNoteError: action.createNoteError,
      };

    case NotesConstats.GET_NOTES_REQUEST:
      return {
        ...state,
        gettingNotes: true,
        notesError: null,
      };

    case NotesConstats.GET_NOTES_SUCCESS:
      return {
        ...state,
        gettingNotes: false,
        notesList: action.notesList,
      };

    case NotesConstats.GET_NOTES_ERROR:
      return {
        ...state,
        gettingNotes: false,
        notesError: action.notesError,
      };

    case NotesConstats.DELETE_NOTE_REQUEST:
      return {
        ...state,
        deletingNote: true,
        deleteNoteMessage: null,
        deleteNoteError: null
      };

    case NotesConstats.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deletingNote: false,
        deleteNoteMessage: action.deleteNoteMessage,
      };

    case NotesConstats.DELETE_NOTE_ERROR:
      return {
        ...state,
        deletingNote: false,
        deleteNoteError: action.deleteNoteError,
      };

    default:
      return state;
  }
};
