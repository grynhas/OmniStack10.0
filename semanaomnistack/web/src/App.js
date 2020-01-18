import React from 'react';

import './global.css';
import './App.css';
import './Siderbar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50931242?s=460&v=4" alt="patrick douglas" />
              <div className="user-info">
                <strong>Patrick Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Sei la o que mais das quantas so para encher aqui mesmo esse testo e temporario</p>
            <a href="https://github.com/grynhas">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50931242?s=460&v=4" alt="patrick douglas" />
              <div className="user-info">
                <strong>Patrick Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Sei la o que mais das quantas so para encher aqui mesmo esse testo e temporario</p>
            <a href="https://github.com/grynhas">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50931242?s=460&v=4" alt="patrick douglas" />
              <div className="user-info">
                <strong>Patrick Reis</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Sei la o que mais das quantas so para encher aqui mesmo esse testo e temporario</p>
            <a href="https://github.com/grynhas">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
