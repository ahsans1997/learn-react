import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar title= "Ahsanul Hasan" />
      </header>
      <section>
        <TextForm heading="Enter Text To Change" />
        <About />
      </section>
    </div>
  );
}

export default App;
