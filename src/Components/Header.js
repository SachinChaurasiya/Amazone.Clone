import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from '../Reducer/StateProvider'
import {auth} from '../Firebase/Firebase'

const Header = () => {

        const[{basket, user} , dispatch] = useStateValue();
        const handleAuthentication =()=>{
            if(user){
                auth.signOut();
            }
        }

    return (
        <div className="header">
           <Link to={!user && '/login'}> 
           <img
            className="header_logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon_Logo" /></Link>
            <div className="header_search">
                <input type="text" className="header_searchIn" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to="/login">
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                        {user? 'Sign Out': "Sign In"}
                    </span>
                </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Return
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>

               <Link to='/checkout'> <div className="header_optionBasket">
                   <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">
                        {basket?.length}
                    </span>
                </div></Link>
            </div>
        </div>
    )
}

export default Header;
