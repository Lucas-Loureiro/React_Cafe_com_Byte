import React, { useContext } from "react";
import { CartContext } from "../../components/CartProvider";

import { CartContainer, CardCart, CardProdutos, CardResult } from './style'

export function Cart() {


    const { cart, addItem, removeItem, clearCart } = useContext(CartContext)
    
    return (
        <CartContainer>
            <CardCart>
                <CardProdutos>Produto1</CardProdutos>
            </CardCart>
            <CardResult>
                <p>Valor Total:</p>
            </CardResult>
        </CartContainer>

    )
}