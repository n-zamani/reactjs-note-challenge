import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotesActions } from '../../_actions';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgress from '@material-ui/core/CircularProgress';

const Cards = (props) => {
  const { note, deletingNote, deleteNoteMessage, deleteNoteError, dispatch } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (deleteNoteMessage || deleteNoteError) { //when delete api returns a response, menu must be closed
      setAnchorEl(null);
    }
  }, [deleteNoteMessage, deleteNoteError]);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = (id) => {
    dispatch(NotesActions.deleteNote(id));
  };

  return (
    <Card elevation={3} key={note._id} className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h3" className={classes.typography}>
          {note.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.typography}>
          {note.content}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardAction}>
        <IconButton aria-label="delete" color="inherit" onClick={handleMenuClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => handleDeleteClick(note._id)}>
            {/* When a note is being deleted, a loader will replace 'Delete' */}
            {deletingNote ? <CircularProgress color="inherit" size={30} /> : 'Delete'}
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    deletingNote: state.notes.deletingNote,
    deleteNoteMessage: state.notes.deleteNoteMessage,
    deleteNoteError: state.notes.deleteNoteError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(NotesActions, dispatch),
  };
};

const connectedCards = connect(mapStateToProps, mapDispatchToProps)(Cards);

export { connectedCards as Cards };