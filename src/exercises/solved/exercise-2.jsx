import React from 'react';

function ButtonFilho(props) {
  return <button className={`sbtn  key-btn  ${props.cor}-btn`} type="button">{props.cor}</button>;
}

function ComponentePai() {
  return (
    <div className="wrap-buttons">
      <ButtonFilho cor="red" />
      <ButtonFilho cor="blue" />
    </div>
  );
}

export default ComponentePai;
