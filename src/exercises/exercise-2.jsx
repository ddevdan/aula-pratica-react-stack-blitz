import React from 'react';

function ButtonFilho() {
  /**
   * Componentes podem ter PROPS, props são propriedades dos componentes
   * e podem ser passadas no momento em que são chamados.
   *
   * Props são essenciais para o React, com elas conseguimos customizar nossos componentes.
   * O componente recebe as "props" como parametro
   *
   * Ex de um componente que renderiza o nome da usuaria:
   * function MostrarNome(props) {return <p>{props.nome}</p>};
   * E no componente pai: <MostrarNome nome="Daniel" />
   *
   * TODO
   * - Passe "props" como parametro da função ButtonFilho
   * - Tente trocar a string "red" por props.cor
   */

  return <button className={`sbtn  key-btn  ${'red'}-btn`} type="button">red</button>;
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
