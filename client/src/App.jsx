//Imports
import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//Components
import AppContainer from './components/AppContainer';

//Views
import * as View from './views';


const App = () => {

  
  const [ticket, setTicket] = useState([0,0,0,0]);
  const [counter, setCounter] = useState(0)
  const location = useLocation();

  const handleCTable = (c, t) => {
    let v = ticket;
    v[c-1] = t;
    setCounter(c);
    setTicket(v);
  }

  return (
    <AppContainer>
      <Routes location={location} key={location.pathname}>
        <Route index path='/' element={<View.Home />} />
        <Route index path='/customer' element={<View.Customer counter={counter} ticket={ticket} />} />
        <Route index path='/counter' element={<View.Counter handleCTable={handleCTable} />} />
        <Route index path='/managerStats' element={<View.ManagerStats />} />
        <Route index path='/managerConfiguration' element={<View.ManagerConfiguration />} />
        <Route path='*' element={<View.ErrorView />} />
      </Routes>
    </AppContainer>
  );
}

export default App;