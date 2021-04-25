import './App.css';
import Container from '@material-ui/core/Container';
import PersistentDrawerLeft from './pages/mainpage';

function App() {
  return (
    <div className="app" style={{height: "100vh"}}>
      {/* <Container maxWidth="md" > */}
        <PersistentDrawerLeft></PersistentDrawerLeft>
      {/* </Container> */}
    </div>
  );
}

export default App;
