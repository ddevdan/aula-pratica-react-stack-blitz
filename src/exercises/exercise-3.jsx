import React from 'react';

function ButtonFilho({ cor }) {
  /**
   * TODO
   * - Receba a prop onClick (ou o nome que você escolheu)
   * - Substitua o conteúdo do onClick pelo nome da prop que você definiu
   */

  return (
    <button className={`sbtn  key-btn  ${cor}-btn`} type="button" onClick={() => {}}>
      {cor}
    </button>
  );
}

function ComponentePai() {
  /** Você pode passar funções como props
   *
   *  TODO
   *  - Passe a função handleClick como prop do ButtonFilho
   */
  const handleClick = () => alert('Você clicou no botão');

  return (
    <div>
      {/* Você pode dar qualquer nome à prop, mas lembre-se de
          receber ela, com o mesmo nome, na declaração da função ButtonFilho */}
      <ButtonFilho cor="red" />
      <ButtonFilho cor="blue" />
    </div>
  );
}

export default ComponentePai;
