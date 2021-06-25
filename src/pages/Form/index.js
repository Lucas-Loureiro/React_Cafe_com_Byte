import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Conteudo, CardCategorias } from './style';
import { IoTrashBinSharp } from 'react-icons/io5'


const Cadastro = () => {

    const [novoNomeCategoria, setNovoNomeCategoria] = useState();
    const [novaDescricao, setNovaDescricao] = useState();
    const [categorias, setCategorias] = useState([]);
    const [idCateg, setIdCateg] = useState();
    const [novoNomeProduto, setNovoNomeProduto] = useState();


    async function cadastrarCategoria(e) {
        e.preventDefault();
        const params = {
            nome: novoNomeCategoria,
            descricao: novaDescricao
        }
        try {
            await api.post(`categoria`, params);
            alert("success")
        } catch (error) {
            console.log('Erro ao cadastrar Categoria', error);
        }
    }



    useEffect(() => {
        async function fetchData() {
            const categoriaResponse = await api.get(`categoria`)

            const categoria = categoriaResponse.data
            setCategorias(categoria);
        }

        fetchData();
    }, [])

    const removeCategoria = async (catego) => {
        await api.delete(`categoria/${catego.id}`)
        alert("Categoria Deletada")
    };

    async function alterarCategoria(e) {
        console.log(novoNomeCategoria)
        
        const params = {
            nome: novoNomeCategoria,
            descricao: novaDescricao
        }

        try {
            await api.put(`categoria/${idCateg}`, params);
        } catch (error) {
            console.log('Erro no alteração. Tente novamente', error);


        }
    }

    async function cadastrarProduto(e) {
        e.preventDefault();
        const params = {
            nome: novoNomeCategoria,
            descricao: novaDescricao
        }
        try {
            await api.post(`categoria`, params);
            alert("success")
        } catch (error) {
            console.log('Erro ao cadastrar Categoria', error);
        }
    }





    return (
        <>
            <Conteudo>

                <div>
                    <form onSubmit={cadastrarCategoria} >
                        <h1>Cadastrar Categoria</h1>
                        <input type="text" value={novoNomeCategoria} onChange={e => setNovoNomeCategoria(e.target.value)} placeholder="Nome da categoria" />
                        <br />
                        <input type="text" value={novaDescricao} onChange={e => setNovaDescricao(e.target.value)} placeholder="Descrição da Categoria" />
                        <br />
                        <button type="submit">Novo Cadastro</button>
                    </form>
                    <CardCategorias>
                        <h1>Deletar Categoria</h1>
                        {
                            categorias.map(categoria => {
                                return (
                                    <div>
                                        <div key={categoria.id}>{categoria.nome}<button onClick={() => removeCategoria(categoria)}><IoTrashBinSharp /></button></div>

                                    </div>
                                )
                            })
                        }
                    </CardCategorias>
                   
                </div>
            </Conteudo>
        </>
    )
}
export default Cadastro;