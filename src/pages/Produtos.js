import Store from '../components/store/Store'
import Header from '../components/header/Header';

function Produtos(props){

    function changeCart(childcart){
        props.setCart(childcart);
    }

    return (
        <>
            <Header/>
            <hr/>
            <Store
                cart={props.cart}
                setCart={changeCart}
            />
        </>
    )
}

export default Produtos