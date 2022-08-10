import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  E01, E02, E03, E04, E05, E06, E07,
} from './Pages/Exercicios';
import Home from './Pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/1" element={<E01 />} />
        <Route path="/exercises/2" element={<E02 />} />
        <Route path="/exercises/3" element={<E03 />} />
        <Route path="/exercises/4" element={<E04 />} />
        <Route path="/exercises/5" element={<E05 />} />
        <Route path="/exercises/6" element={<E06 />} />
        <Route path="/exercises/7" element={<E07 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
