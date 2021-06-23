import React, { useState, useEffect } from "react";


import {
    HamburguerContainer,
    Icon,
    CloseIcon,
    HamburguerMenu,
    HamburguerLink,
} from './style'

import api from '../../services/api'
import { FaTimes } from 'react-icons/fa'





const HamburguerNav = ({ isOpen, toggle }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const categoriaResponse = await api.get(`categoria`)

            const categoria = categoriaResponse.data
            setCategorias(categoria);
        }

        fetchData();
    }, [])

    return (
        <HamburguerContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon><FaTimes /></CloseIcon>
            </Icon>
            <HamburguerMenu>
                {
                    categorias.map(categoria => {
                        return (
                            <HamburguerLink to="/" key={categoria.id}>{categoria.nome}</HamburguerLink>
                        )
                    })
                }
            </HamburguerMenu>
        </HamburguerContainer>
    );
};

export default HamburguerNav;