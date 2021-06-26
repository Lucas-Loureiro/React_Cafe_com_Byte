import React, { useState, useEffect } from 'react';
import api from '../services/api'
import { IoTrashBinSharp } from 'react-icons/io5'


function App() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState(null);
    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const categoriaResponse = await api.get(`categoria`)

            const categoria = categoriaResponse.data
            setCategorias(categoria);
        }

        fetchData();
    }, [])

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

    return (
        <div>
            <div>
                {
                    categorias.map(categoria => {
                        return (
                            <div>
                                <p key={categoria.id}>{categoria.nome}<button onClick={() => setIdCategoria(categoria.id)}><IoTrashBinSharp /></button></p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Nome Categoria"
                    value={nome}
                    onChange={e => setNome(e.target.value)} />
            </div>
            <div >
                <input
                    type="text"
                    placeholder="Enter Descricao Categoria"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)} />
            </div>
            <button
          type="submit"
          onClick={handleSubmit}
        >Atualizar Categoria</button>
        </div>

    );
}

export default App;