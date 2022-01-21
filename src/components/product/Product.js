import React, { useState } from "react";
import InputNum from "../inputs/InputNum";
import Button from "../inputs/Button";

import Modal from "react-modal/lib/components/Modal";
import { Tooltip } from "@mui/material";

import './css.css'


Modal.setAppElement('#root');

function Product(props){

    const [amount, setAmount] = useState(props.amount?props.amount:0);
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleValueChange() {
        setAmount(document.getElementById(props.product.id).value);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setAmount(0);
        setIsOpen(false);
    }

    function changeCart(childcart){
        props.changeCart(childcart);
        // console.log(props.cart);
    }

    function displayAmount(amount){
        if (amount > 0)
            return ("x"+amount)
        else
            return null;
    }

    return (
        <div className="prod-container columns">
            <Tooltip
                placement="top-start" arrow disableFocusListener
                title={<ul>
                    <li>Calories: {props.product.nutritions.calories}</li>
                    <li>Carbohydrates: {props.product.nutritions.carbohydrates}</li>
                    <li>Fat: {props.product.nutritions.fat}</li>
                    <li>Protein: {props.product.nutritions.protein}</li>
                    <li>Sugar: {props.product.nutritions.sugar}</li>
                </ul>}
            >
                <div className="prod-container-child">
                    {displayAmount(props.product.amount)} {props.product.name}
                </div>
            </Tooltip>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={props.title}
            >
                <InputNum
                    name={props.product.name}
                    nutrition={props.product.nutritions}
                    id={props.product.id} min={1} 
                    onChange={handleValueChange}
                    value={amount}
                    cart={props.cart}
                    changeCart={changeCart}
                    closeModal={closeModal}
                    buttonAction={props.buttonAction}
                />
            </Modal>
            <Button text={props.title} className="btn-tocart" buttonAction={openModal}></Button>
        </div>
    )
}

export default Product