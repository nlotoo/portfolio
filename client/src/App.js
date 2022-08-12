
import './App.css';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { Contact } from './components/Contact/Contact';
import { Navigation } from './components/Navigation/Navigation';
import { Experience } from './components/Experience/Experience';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Portfoilio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="root-app-element">

      <HomeScreen />
      <Navigation />
      <AboutMe />
      <Experience />
      <Portfoilio />
      <Contact />
    </div>
  );
}

export default App;
