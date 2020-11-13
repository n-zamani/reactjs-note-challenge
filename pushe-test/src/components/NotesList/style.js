import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

export const NotesListWrapper = styled.section`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;

export const useStyles = makeStyles({
  card: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  cardContent: {
    padding: '0!important',
  },
  cardAction: {
    alignSelf: 'flex-end',
    padding: '0!important',
  },
  typography: {
    wordBreak: 'break-word',
    
    '&.MuiTypography-h6': {
      marginBottom: 20,
    }
  },
});