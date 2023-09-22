import './form.css'

export default function Form({element, titleForm, buttonTitle, linkElement=null, onClick}){
    return (
        <form className="form">
            <h2 className="form__title">{titleForm}</h2>
            {element}
            <button className="form__submit" onClick={onClick}>{buttonTitle}</button>
            {linkElement}
        </form>
    )
}