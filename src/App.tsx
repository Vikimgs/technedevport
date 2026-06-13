import './styles/global.css';
import { Navbar }    from './components/Navbar/Navbar';
import { Hero }      from './sections/Hero/Hero';
import { About }     from './sections/About/About';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { Contact }   from './sections/Contact/Contact';
import { Footer }    from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}