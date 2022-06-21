import './App.css';
import { render } from '@testing-library/react';
import  List from './components/List'; 
import {Routes, Route} from 'react-router-dom';
import Compo1 from './components/Compo1';

function App() {
  
    return(
      <div>
        <Routes>
          <Route path="" element={<Compo1/>}/>
        </Routes>
      </div>
      
    );

  
  
  
}

export default App;
