import './form.css'

export default function Form({element, titleForm, buttonTitle, linkElement=null}){
    return (
        <form className="form">
            <h2 className="form__title">{titleForm}</h2>
            {element}
            <button className="form__submit">{buttonTitle}</button>
            {linkElement}
        </form>
    )
}