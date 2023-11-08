import React, { useState } from 'react'; // Assurez-vous d'importer React et useState
import './Home.css';

function Home() {
  const [animation, setAnimation] = useState(true);

  const toggleAnimation = () => {
    console.log(animation);
    setAnimation((prevAnimation) => !prevAnimation); // Utilisez une fonction de rappel pour mettre à jour l'état précédent
  }

  return (
    <div className="container">
      <img
        src="../images/dwwm_1.png"
        className={`logo ${animation ? 'rotate' : ''}`}
        alt="logo"
      />
      <h1>TP React Développeur Web et Web Mobile</h1>
      <button
        className="App-button"
        onClick={toggleAnimation}
      >
        Modifier l’animation
      </button>
    </div>
  );
}

export default Home;



