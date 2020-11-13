import { TakeNote, NotesList } from '../../components';
import { NotesWrapper } from "./style";

const Main = () => {
  return (
    <NotesWrapper>
      <TakeNote />
      <NotesList />
    </NotesWrapper>
  );
};

export { Main as Notes };
