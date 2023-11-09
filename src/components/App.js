// import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';
import { useState } from 'react';
import App from './About/About';
import App from './components/Layout/Layout';
function App() {

  const [animation, setAnimation] = useState(true)

  const toggleAnimation = () => {
    console.log(animation)
    setAnimation(animation => !animation)
  }



  return (
    <div className="App">
      <Home />
      <Routes>
      <Route path="/" element={<Layout />}/>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>

      <header className="App-header">
        <img src={"../images/dwwm_1.png"} className="App-logo" alt="logo" />
        <p>
          TP React Développeur Web et Web Mobile
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Rechercher des films
        </a>
        <button className="App-button" onClick={toggleAnimation}>Modifier l’animation</button>

      </header>
    </div>
  );
}

export default App;
