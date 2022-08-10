import React from 'react';

function ButtonFilho({ cor, handleClick }) {
  return (
    <button className={`sbtn  key-btn  ${cor}-btn`}  type="button" onClick={handleClick}>
      {cor}
    </button>
  );
}

function ComponentePai() {
  // eslint-disable-next-line no-alert
  const handleClick = () => alert('Você clicou no botão');

  return (
    <div>
      <ButtonFilho cor="red" handleClick={handleClick} />
      <ButtonFilho cor="blue" handleClick={handleClick} />
    </div>
  );
}

export default ComponentePai;
