import './css.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Header(props) {

    const currentcart = props.cart;
    console.log(currentcart);

    return(
        <header>
            {console.log(currentcart)}
            <div className="columns">
                <div className="rows">
                    <div id="welcome" className="nav-text">Bem vindo a <span>FrexcoExam</span></div>
                    <Link to="/" className="nav-btn">
                        <StorefrontIcon sx={{fontSize: 30}}/>Produtos 
                    </Link>
                    <Link to="/carrinho" className="nav-btn">
                        <ShoppingCartIcon sx={{fontSize: 30}}/>Carrinho({props.cart.length})
                    </Link>
                </div>
                {/* <div className="rows">
                    <div className="carrossel">Carrossel - dietas e sugestoes</div>
                </div> */}
            </div>
        </header>
    )
}

export default Header