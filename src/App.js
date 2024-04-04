import './App.css';

import AppBar from './header/AppBar';
import Languages from './pages/languages/Languages';
import Sources from './pages/sources/Sources';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App-body">
      <BrowserRouter>
        <header className="App-header">
          <AppBar />
        </header>
        <Routes>
          <Route exact path="/" element={<Languages />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
