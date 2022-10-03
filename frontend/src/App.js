import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import components
import Home from './Components/Home';
import Games from './Components/Games';
import PlayGame from './Components/PlayGame';
import NewGame from './Components/NewGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/games" element={<Games />}/>
        <Route path="/games/new" element={<NewGame/>}/>
        <Route path="/games/:id" element={<PlayGame />}/>
        {/* <Route path="/users/new" element={<SignUp/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;
