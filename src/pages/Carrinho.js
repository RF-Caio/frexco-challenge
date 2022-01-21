import Cart from "../components/cart/Cart"
import Header from "../components/header/Header";

function Carrinho(props){

    function changeCart(childcart){
        props.setCart(childcart);
    }

    return (
        <>
            <Header/>
            <hr/>
            <Cart
                cart={props.cart}
                setCart={changeCart}
            />
        </>
    )
}

export default Carrinho