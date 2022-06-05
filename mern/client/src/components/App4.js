import './App4.css';
import {BrowserRouter as Router} from 'react-router-dom';


import Users from './users/pages/Users.js';
import { Route } from 'react-router-dom';


function App4() {
  return (
    
    
    <div className="App">
        <h2 className="games-title"> Sobre Nosotros</h2>
        <Users/>
    </div>
    
      
      
      
    
  );
}

export default App4;