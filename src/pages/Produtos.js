import Store from '../components/store/Store'

function Produtos(props){

    function changeCart(childcart){
        props.setCart(childcart);
    }

    return (
        <Store
            cart={props.cart}
            setCart={changeCart}
        />
    )
}

export default Produtos