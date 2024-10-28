import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';
import EpisodeList from './pages/EpisodeList';
import Navbar from './components/Nav';

function App() {
  return (
    <Router>
<div className="container-fluid bg-primary  py-5" style={{ minHeight: '100vh' }}>   
<Navbar/>

       <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/episodes" element={<EpisodeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
