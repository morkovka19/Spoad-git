import MainNoLogged from "../main-no-loggged/MainNoLogged";
import Form from "../form/Form";
import {Link} from 'react-router-dom'


export default function Login({onLogin}){
    return (
        <MainNoLogged element={
            <>
                <Form titleForm="Sign in" buttonTitle="Login" element={
                    <fieldset className="form__fieldset">
                        <input className="form__input" placeholder="login"/>
                        <input className="form__input" placeholder="password"/>
                    </fieldset>
                }
                linkElement={
                    <span className="form__span">Don't have an account?<Link to='/sign-up' className="form__link">  Sign up &rarr;</Link></span>
                }
                onClick={onLogin}
                />
            </>
        }
      />
    )
}