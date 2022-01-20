import Cart from "../components/cart/Cart"

function Carrinho(props){

    function changeCart(childcart){
        props.setCart(childcart);
    }

    return (
        <Cart
            cart={props.cart}
            setCart={changeCart}
        />
    )
}

export default Carrinho