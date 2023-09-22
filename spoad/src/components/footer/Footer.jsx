import './footer.css'

export default function Footer({loggedIn}){
    return (
        <div className={`footer ${loggedIn ? 'footer_visible': null }`}>Footer</div>
    )
}