import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../components/CartProvider";
import { IoMdRemoveCircleOutline } from 'react-icons/io'


import { CartContainer, CardCart, CardProdutos, CardResult } from './style'

export function Cart() {


    const { cart, addItem, removeItem, clearCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);



    useEffect(() => {
        var soma = cart.reduce(function (accumulator, currentValue) {
            return accumulator + (currentValue.valorUnitario * currentValue.quantidade);
        }, 0);
        setTotal(soma)
    }, [cart])



    return (
        <CartContainer>
            <CardCart>
                <h1>Carrinho</h1>
                {
                    cart.map(produto => {
                        return (
                            <div>
                                <CardProdutos><img src={produto.url} alt={produto.nome} />{produto.nome} $ {produto.valorUnitario} qtd.: {produto.quantidade}<button onClick={() => removeItem(produto.nome)}><IoMdRemoveCircleOutline /></button></CardProdutos>
                            </div>
                        )
                    })
                }

                <button onClick={clearCart} id="clear">Limpar Carrinho</button>
            </CardCart>
            <br />
            <CardResult>
                <p>Valor Total: $ {total}</p>
            </CardResult>
        </CartContainer>

    )
}