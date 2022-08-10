import React from 'react';

import { PHOTOS } from '../constants';

function Item({ pic }) {
  return <img width="200" src={pic.download_url} alt={pic.author} />;
}

function ListaDeItems() {
  /**
   * Para renderizar listas de items no React, usamos o metodo .map
   * É importante passar o prop "key" para cada item da lista,
   * para que o React consiga idenficar e rastrear o item caso haja alterações na lista
   *
   * Passar index pode causar problemas, veja mais nesse blogpost: https://kentcdodds.com/blog/understanding-reacts-key-prop
   */

  /**
   * TODO
   * - Faça um map na array de fotos que está armazenada na constante PHOTOS. Ex.: PHOTOS.map((pic) => ....
   * - Não esqueça: cada item precisa retornar um elemento HTML para ser renderizado
   * - Retorne o componente Item e passe a prop "pic" para ele
   * - Você precisa criar uma key para cada item, nesse caso você pode tentar usar o id das photos => pic.id
   */
  return <div>Sua lista de pics deve ficar aqui.</div>;
}

export default ListaDeItems;
