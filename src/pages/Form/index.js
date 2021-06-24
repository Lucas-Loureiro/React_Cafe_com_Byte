import React, { useState, useEffect } from "react";
import api from '../../services/api'

import { Input, FormContainer } from './style'


export function Form() {

      
    return (

        <form>
            <input type="text"  placeholder="Nome"  ></input>
            <input type="text" placeholder="Descricao"  ></input>
        </form>

    )
}