import MainNoLogged from "../main-no-loggged/MainNoLogged";
import Form from "../form/Form";


export default function Login(){
    return (
        <MainNoLogged element={
            <>
                <Form titleForm="Login" buttonTitle="Sign in" element={
                    <fieldset className="form__fieldset">
                        <input className="form__input" placeholder="login"/>
                        <input className="form__input" placeholder="password"/>
                    </fieldset>
                }/>
            </>
        }
      />
    )
}