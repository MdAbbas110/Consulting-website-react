import './App.css';
import Dashboard from './components/Dashboard';
import Heading from './components/Heading';
import Hero from './components/Hero';
import JumpStart from './components/JumpStart';
import NavBar from './components/NavBar';
import Overview from './components/Overview';
import Team from './components/Team';

function App() {
  return (
    <>
      <Heading />
      <NavBar />
      <Hero />
      <Overview />
      <Team />
      <Dashboard />
    </>
  );
}

export default App;
