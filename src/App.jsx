import Heading from "./components/Heading";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Team from "./components/Team";
import Dashboard from "./components/Dashboard";
import Collaborate from "./components/Collaborate";

import MarqueeSection from "./components/Marquee";
import StoryLine from "./components/StoryLine";

function App() {
  return (
    <>
      <Heading />
      <Navbar />
      <Hero />
      <Overview />
      <Team />
      <Dashboard />
      <Collaborate />
      <MarqueeSection />
      <StoryLine />
    </>
  );
}

export default App;
