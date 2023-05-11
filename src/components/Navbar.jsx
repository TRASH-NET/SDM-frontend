import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faHouse, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import '../sass/NavBar.scss';

export const Navbar = () => {
    return(<nav className='navBar'>
        <div className='navBar__container-house-icon'>
            <FontAwesomeIcon icon={faHouse} className='navBar__house-icon'/>
        </div>
        <div className='navBar__container-search'>
            <input type="text" placeholder='Title, author' className='navBar__search-input'/>
            <FontAwesomeIcon icon={faSearch} className='navBar__search-icon'/>
        </div>
        <div className='navBar__container-usercart-icon'>
            <FontAwesomeIcon icon={faUser} className='navBar__user-icon'/>
            <div className='navBar__line'></div>
            <FontAwesomeIcon icon={faCartShopping} className='navBar__cart-icon'/>
        </div>
    </nav>);
};

