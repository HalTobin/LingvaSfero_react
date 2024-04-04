import logo from './logo.svg';
import './App.css'

import AppBar from './header/AppBar';
import AppContent from './pages/AppContent';

function App() {
  return (
    <div className="App-LingvaSfero">
      <header className="App-header">
        <AppBar />
      </header>
      <body className="App-body">
        <AppContent />
      </body>
    </div>
  );
}

export default App;
