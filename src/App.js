import logo from './logo.svg';
import './App.css'

import AppBar from './header/AppBar';
import Languages from './pages/languages/Languages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
      </header>
      <body className="App-body">
        <Languages />
      </body>
    </div>
  );
}

export default App;
