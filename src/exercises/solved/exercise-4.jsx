import React from 'react';

import { COLORS } from '../../constants';

function ButtonFilho({ cor, handleClick }) {
  return (
    <button className={`sbtn  key-btn  ${cor}-btn`} type="button" onClick={handleClick}>
      {cor}
    </button>
  );
}

function ComponentePai() {
  const [cor, setCor] = React.useState('red');

  const handleClick = () => {
    const pRandom = Math.floor(Math.random() * (2 - 0 + 1), 10);
    const corAtual = COLORS[pRandom];
    setCor(corAtual);
  };

  return (
    <div>
      {/* As alterações só acontecem porque estamos usando o state * */}
      <ButtonFilho cor={cor} handleClick={handleClick} />
    </div>

  );
}

export default ComponentePai;
