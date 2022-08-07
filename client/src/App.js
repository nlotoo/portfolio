
import './App.css';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { Contact } from './components/Contact/Contact';
import { Navigation } from './components/Navigation/Navigation';
import { Experience } from './components/Experience/Experience';
import { AboutMe } from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="root-app-element">

      <HomeScreen />
      <Navigation />
      <AboutMe />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
