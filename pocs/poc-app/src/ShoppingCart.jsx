import React, { useCallback, useState, useEffect } from 'react';
import './ShoppingCart.css';

// Criar os objetos de itens
// Os pedidos devem ser arastados para o carrinho, validar os exenciais, colocar os valores nos produtos - relacionar valor total do produto no carrinho
export function ShoppingCart() {
  return (
    <section className="smart-section">
      <h5>Se você chegou até aqui, sinal que é fera </h5>
      <div className="smart-content">
        <div>
          <img
            className="egg"
            src="https://cdn.pixabay.com/photo/2017/01/31/17/09/egg-2025633_1280.png"
            alt=""
          />
          <img
            className="egg"
            src="https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_1280.png"
            alt=""
          />
          <img
            className="egg"
            src="https://cdn.pixabay.com/photo/2012/04/26/19/35/pears-42897_1280.png"
            alt=""
          />
          <img
            className="ice"
            src="https://cdn.pixabay.com/photo/2016/06/02/22/14/ice-1432278_1280.png"
            alt=""
          />
        </div>
        <img
          className="cart"
          src="https://cdn.pixabay.com/photo/2016/04/01/11/00/cart-1300159_1280.png"
          alt=""
        />
      </div>
    </section>
  );
}
