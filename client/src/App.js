
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './navigation/NavigationBar';
import { HomeScreen } from './HomeScreen/HomeScreen';
import { Contatct } from './Contatct/Contatct';

function App() {
  return (
    <div className="root-app-element">
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
    
      <HomeScreen />

      <Contatct />
    </div>
  );
}

export default App;
