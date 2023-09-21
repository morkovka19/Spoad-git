import MainNoLogged from "../main-no-loggged/MainNoLogged";
import Form from "../form/Form";


export default function Registration(){
    return (
        <MainNoLogged element={
            <>
                <div>Registration</div>
                <Form />
            </>
        }
      />
    )
}