import React from 'react';
//import logo from './logo.svg';
import './stylesheets/App.scss';
import heart from './images/heart-solid.svg';
import person from './images/person.jpg';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <img src={person} alt="person" className="app-img-header"></img>
          <h1 className="app-name">Alex Guerrero</h1>
          <h2 className="app-date">Lunes 26 de junio de 2017</h2>
        </header>
        <main className="app-main">
          <p className="app-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum totam officiis quod, tenetur accusantium aut laborum! Laudantium cumque tenetur ipsum repellat quas earum, illum obcaecati omnis ad nam voluptatum.</p>
        </main>
        <footer className="app-footer">
          <p className="app-paragrah-footer">Leer mas...</p>
          <div className="app-divlikes">
            <p className= "app-plikes">37</p>
            <img src={heart} alt="heart red" className="app-img-footer"></img>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
