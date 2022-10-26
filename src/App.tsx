import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Recipes from './components/Recipes';
import { Route, Routes} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path="/"/>
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
    </div>
  );
}

export default App;
