import { Notes } from './pages';
import { Header, Footer } from './components';
import { GlobalStyles } from './otherStyles/App.style';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Notes />
      <Footer />
    </>
  );
}

export default App;
