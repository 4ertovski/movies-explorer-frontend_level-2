import "./Form.css"
import {Link} from "react-router-dom";
import logo from '../../images/logo.svg'

const Form = ({children, title, buttonText, question, linkText, link}) => {
    return(
        <div className={'form__container'}>
            <Link to={'/'} className='form__logo'>
                <img src={logo} alt={'Логотип проекта'}/>
            </Link>
            <h3 className='form__title'>{title}</h3>
            <form className='form'>
                {children}
                <button type='submit' className='form__button-submit'>
                    {buttonText}
                </button>
            </form>
            <p className="form__text">
                {question}
                <Link to={link} className='form__link'>
                    {linkText}
                </Link>
            </p>
        </div>
    )
}

export default Form