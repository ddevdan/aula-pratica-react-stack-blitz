import React from 'react';

import { COLORS } from '../../constants.js';

function ButtonFilho({ cor, handleClick }) {
  return (
    <button className={`sbtn  key-btn  ${cor}-btn`} type="button" onClick={handleClick}>
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
   */
  if (cor === 'black') {
    return (
      <div className="wrap-buttons">
        <h3>
          Se for preto, retorna blue
        </h3>
        <ButtonFilho cor="blue" handleClick={handleClick} />
      </div>
    );
  }

  return (
    <div>
      <div className="wrap-buttons">
        <h3>
          Se for yellow, troca por blue, se não for, trocar por red
        </h3>
        {/* Troque a cor "yellow" por "blue", caso não seja ela, troque por "red" */}
        {cor === 'yellow'
          ? <ButtonFilho cor="blue" handleClick={handleClick} />
          : <ButtonFilho cor="red" handleClick={handleClick} />}
      </div>

      {cor === 'pink' && (
      <div className="wrap-buttons">
        <h3>
          Condição:
          Renderiza somente se for pink
        </h3>
        {/* Renderize somente se a cor for "pink" */}
        <ButtonFilho cor={cor} handleClick={handleClick} />
      </div>
      )}
    </div>

  );
}

export default ComponentePai;
