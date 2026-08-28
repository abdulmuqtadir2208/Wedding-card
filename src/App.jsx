import RSVP from "./components/RSVP";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import Families from "./components/Families";



function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Countdown />
      <Events />
      <Venue />
      <Gallery />
      <RSVP />
      <Families />
    </main>
  );
}

export default App;