export default function Form({element, titleForm, buttonTitle}){
    return (
        <form className="form">
            <h2 className="title__form">{titleForm}</h2>
            {element}
            <button className="form__submit">{buttonTitle}</button>
        </form>
    )
}