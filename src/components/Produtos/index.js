import React, { useState, useEffect } from "react";
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


export function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const produtoResponse = await api.get(`produto`)
            const produto = produtoResponse.data
            setProdutos(produto);
        }

        fetchData();
    }, [])
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
                                        <ProdutoButton>Adicionar ao Carrinho</ProdutoButton>
                                    </ProdutoInfo>
                                </ProdutoCard>
                            );
                        })
                    }

                </ProdutoWrapper>
                <Cart><IoCartOutline /></Cart>
            </ProdutosContainer >
            
    
    );
}

