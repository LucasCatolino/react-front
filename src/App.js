import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Create from './Create';
import PetDetails from './pages/PetDetails';
import NotFound from './NotFound';
import Pets from './pages/Pets';
import Ongs from './pages/Ongs';
import PetCares from './pages/PetCares';
import OngDetails from './pages/OngDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/create' element={ <Create/> }/>
            <Route path='/pets/:id' element={ <PetDetails/> }/>
            <Route path='/pets' element={ <Pets/> }/>
            <Route path='/ongs' element={ <Ongs/> }/>
            <Route path='/petCares' element={ <PetCares/> }/>
            <Route path='/ong/:id' element={ <OngDetails/> }/>
            <Route path='*' element={ <NotFound/> }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;