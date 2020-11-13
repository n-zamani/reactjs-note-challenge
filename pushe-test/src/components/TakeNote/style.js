import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

export const TakeNoteWrapper = styled.section`
  width: 100%;
  max-width: 700px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: 30,
  },
  paper: {
    width: '100%',
    height: '100%',
    padding: '20px',
  },
  collapse: {
    width: '100%',
  },
  button: {
    width: '120px',
    margin: '15px 0 15px 15px!important',
  },
  textField: {
    width: '100%',
    margin: '20px 0!important',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
  },
});

export const InputsWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;