import React from 'react';

import { PHOTOS } from '../../constants.js';

function Item({ pic }) {
  return <img width="200" src={pic.download_url} alt={pic.author} />;
}

function ListaDeItems() {
  /**
   * Para renderizar listas de items no React, usamos o metodo .map
   * É importante passar o prop "key"" para cada item da lista,
   * para que o React consiga idenficar e rastrear o item caso haja alterações na lista
   *
   * Passar index pode causar problemas, veja mais nesse blogpost: https://kentcdodds.com/blog/understanding-reacts-key-prop
   */
  return PHOTOS.map((pic) => <Item pic={pic} key={pic.id} />);
}

export default ListaDeItems;
