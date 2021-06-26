import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Conteudo, CardCategorias } from './style';
import { IoTrashBinSharp } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'


const Cadastro = () => {

    const [novoNomeCategoria, setNovoNomeCategoria] = useState();
    const [novaDescricao, setNovaDescricao] = useState();
    const [categorias, setCategorias] = useState([]);
    const [produto, setProduto] = useState([]);
    const [idCateg, setIdCateg] = useState();
    const [idProd, setIdProd] = useState();
    const [novoDescProduto, setNovoDescProduto] = useState();
    const [novoNomeProduto, setNovoNomeProduto] = useState();
    const [novoQuantProduto, setNovoQuantProduto] = useState();
    const [novoValorProduto, setNovoValorProduto] = useState();
    const [novoNomeCatProduto, setNovoNomeCatProduto] = useState();
    const [novoDescCatProduto, setNovoDescCatProduto] = useState();
    const [novoUrlProduto, setNovoUrlProduto] = useState();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState(null);
    const [idCategoria, setIdCategoria] = useState();
    const [novoDescProduto1, setNovoDescProduto1] = useState();
    const [novoNomeProduto1, setNovoNomeProduto1] = useState();
    const [novoQuantProduto1, setNovoQuantProduto1] = useState();
    const [novoValorProduto1, setNovoValorProduto1] = useState();
    const [novoNomeCatProduto1, setNovoNomeCatProduto1] = useState();
    const [novoDescCatProduto1, setNovoDescCatProduto1] = useState();
    const [novoUrlProduto1, setNovoUrlProduto1] = useState();
    




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

    
    useEffect(() => {
        async function listarProduto() {
            const produtoResponse = await api.get(`produto`)

            const produto = produtoResponse.data
            setProduto(produto);
        }
        listarProduto();
    }, [])

    const removeProduto = async (prod) => {
        await api.delete(`produto/${prod.id}`)
        alert("Produto Deletada")
    };

    async function cadastrarProduto(e) {
        e.preventDefault();
        const params = {


            nome: novoNomeProduto,
            descricao: novoDescProduto,
            qtdEstoque: novoQuantProduto,
            valorUnitario: novoValorProduto,
            foto: novoUrlProduto,
            categoria: {
                nome: novoNomeCatProduto,
                descricao: novoDescCatProduto
            }
        }

        try {
            await api.post(`produto`, params);
            alert("success")
        } catch (error) {
            console.log('Erro ao cadastrar Categoria', error);
        }
    }

    const handleSubmit = () => {

        const data = {
            nome: nome,
            descricao: descricao
        }
        api.put(`categoria/${idCategoria}`, data).then(res => {
            setData(res.data);
            setNome('');
            setDescricao('');

        });
    }


    const handleSubmit1 = (e) => {
        e.preventDefault()
        const data = {
            nome: novoNomeProduto1,
            descricao: novoDescProduto1,
            qtdEstoque: novoQuantProduto1,
            valorUnitario: novoValorProduto1,
            foto: novoUrlProduto1,
            categoria: {
                nome: novoNomeCatProduto1,
                descricao: novoDescCatProduto1
            }
        }
        api.put(`produto/${idProd}`, data).then(res => {
            setData(res.data);
            setNovoDescProduto1('');
            setNovoNomeProduto1('');
            setNovoQuantProduto1('');
            setNovoValorProduto1('');
            setNovoNomeCatProduto1('');
            setNovoDescCatProduto1('');
            setNovoUrlProduto1('');
            console.log(idProd)


        });
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

                    <CardCategorias>
                        <h1>Deletar Produto</h1>
                        {
                            produto.map(produtos => {
                                return (
                                    <div>
                                        <div>{produtos.nome}<button onClick={() => removeProduto(produtos)}><IoTrashBinSharp /></button></div>

                                    </div>
                                )
                            })
                        }
                    </CardCategorias>
                    <CardCategorias>
                        <h1>Atualizar Categoria</h1>
                        <div>
                            <div>
                                {
                                    categorias.map(categoria => {
                                        return (
                                            <div>
                                                <p key={categoria.id}>{categoria.nome}<button onClick={() => setIdCategoria(categoria.id)}><MdEdit /></button></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <form>
                                <input
                                    type="text"
                                    placeholder="Nome Categoria"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)} />


                                <input
                                    type="text"
                                    placeholder="Descricao Categoria"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)} />

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                >Atualizar Categoria</button>
                            </form>
                        </div>

                    </CardCategorias>

                    <CardCategorias>
                        <h1>Atualizar Produto</h1>
                        <div>
                            <div>
                                {
                                    produto.map(produtos => {
                                        return (
                                            <div>
                                                <p key={produtos.id}>{produtos.nome}<button onClick={() => setIdProd(produtos.id)}><MdEdit /></button></p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <form onSubmit={(e) => handleSubmit1(e)}>
                                <input
                                    type="text"
                                    placeholder="Nome Produto"
                                    value={novoNomeProduto1}
                                    onChange={e => setNovoNomeProduto1(e.target.value)} />


                                <input
                                    type="text"
                                    placeholder="Descricao Produto"
                                    value={novoDescProduto1}
                                    onChange={e => setNovoDescProduto1(e.target.value)} />
                                 <input
                                    type="number"
                                    placeholder="Quantidade"
                                    value={novoQuantProduto1}
                                    onChange={e => setNovoQuantProduto1(e.target.value)} />
                                     <input
                                    type="text"
                                    placeholder="Valor"
                                    value={novoValorProduto1}
                                    onChange={e => setNovoValorProduto1(e.target.value)} />
                                     <input
                                    type="text"
                                    placeholder="Url Imagem"
                                    value={novoUrlProduto1}
                                    onChange={e => setNovoUrlProduto1(e.target.value)} />
                                     <input
                                    type="text"
                                    placeholder="Nome Categoria"
                                    value={novoNomeCatProduto1}
                                    onChange={e => setNovoNomeCatProduto1(e.target.value)} />
                                     <input
                                    type="text"
                                    placeholder="Descricao Categoria"
                                    value={novoDescCatProduto1}
                                    onChange={e => setNovoDescCatProduto1(e.target.value)} />

                                <button
                                    type="submit"
                                >Atualizar Produto</button>
                            </form>
                        </div>

                    </CardCategorias>
                    
                    <form onSubmit={(e) => cadastrarProduto(e)}>
                    <h1>Inserir Produtos</h1>
                        <input type="text" id="nome_post" placeholder="Nome" value={novoNomeProduto} onChange={e => setNovoNomeProduto(e.target.value)} />
                        <input type="text" id="desc_post" placeholder="Descrição" value={novoDescProduto} onChange={e => setNovoDescProduto(e.target.value)} />
                        <input type="number" id="qtd_post" placeholder="Quantidade" value={novoQuantProduto} onChange={e => setNovoQuantProduto(e.target.value)} />
                        <input type="text" id="valor_post" placeholder="Valor" value={novoValorProduto} onChange={e => setNovoValorProduto(e.target.value)} />
                        <input type="text" id="nomeCat_post" placeholder="Nome Categoria" value={novoNomeCatProduto} onChange={e => setNovoNomeCatProduto(e.target.value)} />
                        <input type="text" id="descCat_post" placeholder="Descrição Categoria" value={novoNomeCategoria} onChange={e => setNovoDescCatProduto(e.target.value)} />
                        <input type="text" id="arquivo" placeholder="Url Foto" value={novoUrlProduto} onChange={e => setNovoUrlProduto(e.target.value)} />
                        <button type="submit">Inserir Produto</button>
                    </form>

                </div>
            </Conteudo>
        </>
    )
}
export default Cadastro;