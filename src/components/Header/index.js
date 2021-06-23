import {useState} from 'react'

import { Nav, NavLink, NavIcon, Hamburguer } from './styles'
import  HamburguerNav  from '../MenuHambuguer/index'


export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        
        setIsOpen(!isOpen);
        console.log(isOpen)
    };

    return (
        <div>
            <Nav>
                <NavLink to='/'>Café com Byte</NavLink>
                <NavIcon onClick={toggle}>
                    <Hamburguer />
                </NavIcon>
            </Nav>
            <HamburguerNav isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}
