/* 
import {opcionesvalidas} from './'
import { useReducer } from 'react'
import{reducer} from ''
function App() {

const [state,disatch]=useReducer(reducer,{
  opcionesvalidas:OpcionesValidas.AIA
})
const onclick=(event)=>{
  disatch({type:Inicio.seleccionar, payload:(event.targe.id)})
}
  return (
    <>
    <div id='1' className="app">


      <main className="app__main ${state.opcionInicio==OpcionValidads.HH && 'el nobre de mi clace'.}"onclick={onclick} >
      
      </main>
 <footer className="footer" role="contentinfo">
      <div className="footer__container">



        <div className="footer__logo" aria-hidden="true">
          <div className="footer__logo-grid">
          
           
          </div>
        </div>

        <div className="footer__line" aria-hidden="true" />

        <p className="footer__texto">
          Desarrollado con{' '}
          <span className="footer__react" aria-label="React">

            <svg
              className="footer__react-logo"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <ellipse cx="12" cy="12" rx="10" ry="4"
                stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4"
                stroke="currentColor" strokeWidth="1.5"
                transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4"
                stroke="currentColor" strokeWidth="1.5"
                transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="2"
                fill="currentColor" />
            </svg>
            React
          </span>{' '}
      
        </p>

      </div>
    </footer>
      <Footer className="app__main ${state.opcionInicio==OpcionValidads.HAT && 'el nobre de mi clace'.}"onclick={onclick} />
    </div>
    </>
  )
}

export default App
 */

// src/App.jsx
import './App.css';
/* import Home     from './components/Home/Home';
import Tablero  from './components/Tablero/Tablero';
import Resultado from './components/Resultado/Resultado';
import Footer   from './components/Footer/Footer'; */
import Navbar from './Navbar/Navbar';

/**
 * App — Componente raíz.
 *
 * Actualmente renderiza todas las vistas en secuencia para
 * fines de diseño y presentación visual.
 *
 * Al integrar la lógica, se deberá reemplazar la presentación
 * secuencial por un enrutador (React Router) o un sistema de
 * vistas controlado por estado (currentView).
 *
 * Vista posible: 'home' | 'game' | 'result'
 */
const App = () => {
  return (
    <div className="app">
      <Navbar />

      {/* ── VISTA: Home ── */}
      <main className="app__main">
        <Home />
      </main>

      {/* ── VISTA: Juego (para presentación visual, comentar/descomentar) ── */}
      {/*
      <main className="app__main">
        <Tablero />
      </main>
      */}

      {/* ── VISTA: Resultado (para presentación visual) ── */}
      {/*
      <main className="app__main app__main--centered">
        <Resultado ganador="X" />
      </main>
      */}

      <Footer />
    </div>
  );
};

export default App;