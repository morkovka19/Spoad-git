import './main-no-logged.css';

export default function MainNoLogged({ element }) {
    return (
        <main className='main-no-logged'>
            <div className='main-no-logged__background main-no-logged__background_right'></div>
            <div className='main-no-logged__container'>
                <div className='main-no-logged__block-info'>
                    <h1 className='main-no-logged__title'>Spoad</h1>
                    <p className='main-no-logged__text'>
                        This is a web platform for novice programmers. It was designed to make work with services for development and hosting as easy as it's possible. Simplified interface allows beginners to use professional tools in the most effective way.
                        
                    </p>
                    <p className='main-no-logged__text'>Have a nice work!</p>
                </div>
                {element}
            </div>
            <div className='main-no-logged__background main-no-logged__background_left'></div>
        </main>
    )
}