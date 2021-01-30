import './App.css';
import { PomodoroTimer } from './components/PomordoroTimer';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        header
      </header>
      <PomodoroTimer>
      </PomodoroTimer>
      <Tasks>
      </Tasks>
    </div>
  );
}

export default App;
