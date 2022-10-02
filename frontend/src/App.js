import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import Home from './Components/Home';
import Games from './Components/Games';
import PlayGame from './Components/PlayGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/games/:id" element={<PlayGame />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
