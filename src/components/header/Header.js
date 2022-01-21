import './css.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Header() {

    return(
        <header>
            <div className="columns">
                <div className="rows">
                    <div id="welcome" className="nav-text">Welcome to <span>FrexcoExam</span></div>
                    <Link to="/" className="nav-btn">
                        <StorefrontIcon sx={{fontSize: 30}}/>Store 
                    </Link>
                    <Link to="/carrinho" className="nav-btn">
                        <ShoppingCartIcon sx={{fontSize: 30}}/>Cart
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