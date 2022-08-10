import React from 'react';

import { CAT_URL, PHOTOS } from '../../constants.js';

function Cat({ cat }) {
  return (
    <div>
      <h3>
        Futuristic Name:
        {cat.id}
      </h3>
      <img width="200" src={cat.url} alt="um gatinho lindo" />
    </div>
  );
}

function ListCats() {
  const [cats, setCats] = React.useState([]);
  /**
   * o useEffect lida com async e mantém a aplicação atualizada
   * Ele lida com assincronidade e mantém a React atualiazado em relação ao navegador
   * Recomendação de leitura :) https://bugged.dev/post/The-useEffect-Cheatsheet
   */

  React.useEffect(() => {
    fetch(CAT_URL).then((res) => res.json()).then((response) => setCats(response));
    return () => setCats([]);
  }, []); // nesse caso o request será feito assim que o componente for montado

  /** Caso a usuária click no botão, um novo request será feito para a API   */
  const handleRefresh = () => {
    fetch(CAT_URL).then((res) => res.json()).then((response) => setCats(response));
  };

  return (
    <div>
      <div>
        <button type="button" className="button__refresh" onClick={handleRefresh}>REFRESH LISTA</button>
        <h3>Lista de Gatineos</h3>
        {cats.map((cat) => <Cat cat={cat} key={cat.id} />)}
      </div>

    </div>
  );
}

export default ListCats;
