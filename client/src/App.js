
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './navigation/NavigationBar';

function App() {
  return (
    <div className="root-app-element">
      <Routes>
        <Route path='/' element={<Navbar />} />

      </Routes>
    </div>
  );
}

export default App;
