import React, { memo, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';
import './App.css';
import { COLORS } from './style-guide.ts';
import { ShoppingCart } from './ShoppingCart';

const gamePhaseData = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2012/04/26/19/47/penguin-42936_1280.png',
    blocked: false,
    faseGame: 1,
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png',
    blocked: true,
    faseGame: 2,
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2012/04/26/19/47/penguin-42936_1280.png',
    blocked: true,
    faseGame: 3,
  },
];

const mascotsData = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png',
    name: 'Dindin',
  },

  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png',
    name: 'Bufunfa',
  },
];
const App = () => {
  const [gamePhase, setGamePhase] = useState(gamePhaseData);
  const [mascots, setMascots] = useState(mascotsData);

  function handleMascot(id) {
    // Só pode salvar uma imagem
    // console.log(id);
    if (id) {
      const mascotStorage = mascots.find((mascot) => {
        return mascot.id === id;
      });
      console.log(mascotStorage);
      // Separar o storage em uma camada
      return localStorage.setItem('mascot', JSON.stringify(mascotStorage));
      // Redireciona para o primeiro desafio
    } else {
      return null;
    }
  }
  const Button = {
    background: COLORS.primary,
    color: 'red',
  };

  const opacity = {
    filter: 'opacity(0.1)',
  };
  return (
    <>
      {/* <h1>Manipulation CSS</h1>
      <button style={Button}>Save</button> */}
     
        <header className="header-container">
          <div className="container-logo">
            <div className="container-imgs">
              <span className="logo">
                <img
                  src="https://cdn.pixabay.com/photo/2020/04/11/08/07/coins-5029298_1280.jpg"
                  alt=""
                />
              </span>
              <div className="social-media">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/28/12/12/whatsapp-2450410_1280.png"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/25/16/22/linkedin-2680639_1280.png"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/13/12/54/youtube-2398801_1280.png"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/13/12/53/instagram-2398773_1280.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <aside className="container-aside">
            <span>Vitórias</span>
            {gamePhase.map((item) => (
              <div
                style={item.blocked ? { filter: 'opacity(0.1)' } : null}
                className="box"
                key={item.id}
              >
                <div className="item">
                  <img className="img-game" src={item.img} alt="" />
                </div>
              </div>
            ))}
          </aside>
        </header>
        <main className="content">
          <header className="content-header">
            <h1>Plataforma bla</h1>
            <p>
              I always desired to implement the dark mode functionality in my
              React App but never dared to start. Little did I know that it's
              just a few CSS variables and React Context one required to get it
              done.
            </p>
          </header>
        <section >
          <div className="content-main">
            <h6 className="mascot-choose">Escolha seu mascote</h6>
            {mascots.map((mascot) => (
              <div
                className="content-mascots"
                key={mascot.id}
                onClick={() => {
                  handleMascot(mascot.id);
                }}
              >
                <img src={mascot.img} alt="" />
                <span>{mascot.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* <ShoppingCart /> */}
    </>
  );
};

export default App;

