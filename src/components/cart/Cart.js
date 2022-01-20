import React, { useState } from "react";
import Product from "../product/Product";
import './css.css';

function Cart(props){

    //forçar rerender
    const [removed, setRemoved] = useState();

    function changeCart(childcart){
        props.setCart(childcart);
        // console.log(props.cart);
    }

    function removeFromCart(e){
        let newcart = props.cart;
        let toremove = props.cart.find(product => product.id == e.target.value);
        if (toremove) {
            let index = props.cart.indexOf(toremove);
            newcart.splice(index, 1);
            props.setCart(newcart);
            //rerender forçado
            setRemoved(toremove);
        }
    }

    return (
        <div className="container">
            {props.cart.map((product) => (
                <div key={product.id} className="container-child">
                    <Product 
                        title="Editar quantidade"
                        product={product}
                        changeCart={changeCart}
                        //1 para adicionar, 2 para alterar
                        buttonAction={2}
                        cart={props.cart}
                    />
                    <button value={product.id} className="btn-remove" type="button" onClick={removeFromCart}>Remover do carrinho</button>
                </div>
            ))}
        </div>
    )
}

export default Cart