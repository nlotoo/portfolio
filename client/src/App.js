
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './navigation/NavigationBar';
import { HomeScreen } from './HomeScreen/HomeScreen';

function App() {
  return (
    <div className="root-app-element">
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
      <HomeScreen />
    </div>
  );
}

export default App;
