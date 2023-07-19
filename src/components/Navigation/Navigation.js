import './Navigation.css'
import {Link} from "react-router-dom";
import account from '../../images/profile.svg'

const Navigation = ({ handleMenuClose }) => {
    return(
        <div className='navigation'>
            <div className='navigation__container-empty' onClick={handleMenuClose}></div>
            <div className='navigation__container'>
                <button className='navigation__close-button' onClick={handleMenuClose}></button>
            <nav className='navigation__navbar'>
                <Link to={'/'} onClick={handleMenuClose} className='navigation__link'>
                    Главная
                </Link>
                <Link to={'/movies'} onClick={handleMenuClose} className='navigation__link'>
                    Фильмы
                </Link>
                <Link to={'/saved-movies'} onClick={handleMenuClose} className='navigation__link'>
                    Сохраненные фильмы
                </Link>
            </nav>
            <Link to={'/profile'} onClick={handleMenuClose} className='navigation__account-button'>
                <img src={account} alt='Аккаунт'/> {/* TODO change alt */}
            </Link>
            </div>
        </div>
    )
}

export default Navigation