//Imports
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

//Components
import AppContainer from './components/AppContainer';

//Views
import * as View from './views';

const App = () => {
  const location = useLocation();

  return (
    <AppContainer>
      <Routes location={location} key={location.pathname}>
        <Route index path='/' element={<View.Home />} />
        <Route index path='/customer' element={<View.Customer />} />
        <Route index path='/counter' element={<View.Counter/>} />
        <Route index path='/managerStats' element={<View.ManagerStats />} />
        <Route index path='/managerConfiguration' element={<View.ManagerConfiguration />} />
        <Route path='*' element={<View.ErrorView />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
