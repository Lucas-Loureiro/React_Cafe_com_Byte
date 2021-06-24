import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../components/CartProvider";
import api from '../../services/api'

export function Cart(){
    const {cart, addItem, removeItem, clearCart} = useContext(CartContext)

    return (
        <div>
            <div>
            
            </div>
        </div>
    )
}