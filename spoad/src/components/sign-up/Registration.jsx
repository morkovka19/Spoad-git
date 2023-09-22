import MainNoLogged from "../main-no-loggged/MainNoLogged";
import Form from "../form/Form";
import { Link } from 'react-router-dom'; 


export default function Registration(){
    return (
        <MainNoLogged element={
            <>
                <Form titleForm="Sign up" buttonTitle="Sing up" element={
                    <fieldset className="form__fieldset">
                        <input className="form__input" placeholder="login"/>
                        <input className="form__input" placeholder="password"/>
                        <input className="form__input" placeholder="repeat password"/>
                    </fieldset>
                }
                linkElement={
                    <span className="form__span">Already have an account?<Link to='/sign-in' className="form__link">  Sign in &rarr;</Link></span>
                }
                />
            </>
        }
      />
    )
}