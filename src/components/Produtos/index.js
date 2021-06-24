import React, { useState, useEffect, useContext } from "react";
import { IoCartOutline } from 'react-icons/io5'
import {
    ProdutosContainer,
    ProdutoWrapper,
    ProdutoTitle,
    ProdutoCard,
    ProdutoImg,
    ProdutoInfo,
    ProdutoDesc,
    ProdutoPrice,
    ProdutoButton,
    Cart
} from './style';

import api from '../../services/api'
import { CartContext } from "../CartProvider";


export function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [cartItems, setCartItems] = useState(0);
    const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

    useEffect(() => {
        async function fetchData() {
            const produtoResponse = await api.get(`produto`)
            const produto = produtoResponse.data
            setProdutos(produto);
        }

        fetchData();
    }, [])

    function countCart() {
        setCartItems(cartItems + 1)
        addItem(produtos.nome,produtos.descricao, produtos.valorUnitario, produtos.url)
        console.log(cart)
    }
    



    return (

        <ProdutosContainer>
            <ProdutoWrapper>
                {
                    produtos.map(produto => {
                        return (
                            <ProdutoCard key={produto.id}>
                                <ProdutoImg src={produto.url} />
                                <ProdutoInfo>
                                    <ProdutoTitle>{produto.nome}</ProdutoTitle>
                                    <ProdutoDesc>{produto.descricao}</ProdutoDesc>
                                    <ProdutoPrice>$ {produto.valorUnitario}</ProdutoPrice>
                                    <ProdutoButton onClick={countCart}>Adicionar ao Carrinho</ProdutoButton>
                                </ProdutoInfo>
                            </ProdutoCard>
                        );
                    })
                }

            </ProdutoWrapper>

            <Cart ><IoCartOutline />{cartItems}</Cart>

        </ProdutosContainer >


    );
}

