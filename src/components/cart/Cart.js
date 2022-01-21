import React, { useState } from "react";
import Product from "../product/Product";

import { Tooltip } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

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
        if (window.confirm("Are you sure you want to remove "+toremove.name+" from your cart?"))
        {
            if (toremove) {
                let index = props.cart.indexOf(toremove);
                newcart.splice(index, 1);
                props.setCart(newcart);
                //rerender forçado
                setRemoved(toremove);
            }
        }
    }

    function finishShop(){
        if (window.confirm("Have you finished shopping?")){
            window.alert("Thank you for your support, I'll empty your cart now");
            props.setCart([]);
        }
    }

    function clearCart(){
        if (window.confirm("Are you sure you wanto to empty your cart?")){
            props.setCart([]);
        }
    }

    return (
        <div className="container">
            {props.cart.length > 0?
                <>{props.cart.map((product) => (
                    <div key={product.id} className="container-child">
                        <Product 
                            title="Edit Amount"
                            product={product}
                            changeCart={changeCart}
                            //1 para adicionar, 2 para alterar
                            buttonAction={2}
                            cart={props.cart}
                        />
                        <button value={product.id} className="btn-remove" type="button" onClick={removeFromCart}>Remove from cart</button>
                    </div>
                ))}
                {props.cart.length > 0? 
                    <>
                        <Tooltip title="Finish shopping" placement="right" arrow>
                            <button className="btn-finish" type="button" onClick={finishShop}><ShoppingBagIcon sx={{fontSize: 30}}/></button>
                        </Tooltip>
                        <Tooltip title="Clear cart" placement="left" arrow>
                            <button className="btn-clear" type="button" onClick={clearCart}><RemoveShoppingCartIcon sx={{fontSize: 30}}/></button>
                        </Tooltip>
                    </>:""}
                </>:<h2>Your cart is empty</h2>}
        </div>
    )
}

export default Cart