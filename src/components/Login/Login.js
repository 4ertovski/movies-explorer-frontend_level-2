import Form from "../Form/Form";
import '../Form/Form.css'

const Login =  () => {
    return(
        <Form
            title={"Рады видеть!"}
            buttonText={"Войти"}
            question={"Еще не зарегестрированы?"}
            linkText={" Регистрация"}
            link={"/signup"}>
        <label className='form__field'>
            E-mail
            <input name='email' className='form__input' id='email-input' type='text' required={true}/>
            <span className='form__input-error'>Что-то пошло не так...</span>
        </label>
        <label className='form__field'>
            Пароль
            <input name='password' className='form__input' id='password-input' type='password'/>
            <span className='form__input-error'>Что-то пошло не так...</span>
        </label>
        </Form>
    )
}

export default Login