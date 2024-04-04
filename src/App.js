import './App.css';

import AppBar from './header/AppBar';
import Languages from './pages/languages/Languages';
import Sources from './pages/sources/Sources';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App-LingvaSfero">
      <header className="App-header">
        <AppBar />
      </header>
      <body className="App-body">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Languages />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
