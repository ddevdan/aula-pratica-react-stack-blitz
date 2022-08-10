import React from 'react';

import { COLORS } from '../constants';

function ButtonFilho({ cor, handleClick }) {
  return (
    <button className={`btn  key-btn ${cor}-btn`} type="button" onClick={handleClick}>
      {cor}
    </button>
  );
}

function ComponentePai() {
  const [cor, setCor] = React.useState(COLORS[0]);

  const handleClick = () => {
    const pRandom = Math.floor(Math.random() * (2 - 0 + 1), 10);
    const corAtual = COLORS[pRandom];
    setCor(corAtual);
  };

  /**
   * Troque a cor black por "blue"
   * TODO
   * - Verifique se a cor === "black", se sim, retorne o botão com a cor "blue" como prop
   */
  if (cor === '') {
    return (
      <div className="wrap-buttons">
        <h3>
          Se for preto, retorna blue
        </h3>
        {/*
         * TODO
         * - Não esqueça de trocar aqui também
        */}
        <ButtonFilho cor={cor} handleClick={handleClick} />
      </div>
    );
  }

  return (
    <div>
      <div className="wrap-buttons">
        <h3>
          Se for yellow, troca por blue, se não for, trocar por red
        </h3>
        {/** TODO
          - Troque a cor "yellow" por "blue", caso não seja ela, troque por "red" */}
        {cor === '' ? <ButtonFilho cor={cor} handleClick={handleClick} /> : <ButtonFilho cor={cor} handleClick={handleClick} />}
      </div>

      {/* TODO
          - Renderize somente se a cor for "pink" */}
      {cor === '' && (
      <div className="wrap-buttons">
        <h3>
          Condição:
          Renderiza somente se for pink
        </h3>
        <ButtonFilho cor={cor} handleClick={handleClick} />
      </div>
      )}
    </div>

  );
}

export default ComponentePai;
